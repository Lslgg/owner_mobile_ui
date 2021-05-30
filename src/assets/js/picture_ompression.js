const picture_ompression = {
    // file:传入的文件   quality:决定照片压缩后的品质 值越低越模糊
    fileAdd(file, quality) {
        let reader = new FileReader();
        let image = new Image();
        reader.readAsDataURL(file);
        return new Promise((resolved, rejected) => {
            reader.onload = function () {
                file.src = this.result;
                image.onload = function () {
                    let width = image.width;
                    let height = image.height;
                    file.width = width;
                    file.height = height;
                };
                //判断图片的大小，超过1M 进行压缩
                if (file.size / 1024 > 1025) {
                    // 获取压缩后的图片文件以及ios照片进行旋转后的base64
                    picture_ompression.imgCompress(file, {
                        quality: quality
                    }).then(res => {
                        resolved(res)
                    })
                } else {
                    let imgObjData = {
                        imgFiles: '',
                        imgUrl: ''
                    }
                    imgObjData.imgFiles = file
                    imgObjData.imgUrl = file.src
                    resolved(imgObjData)
                }
            }
        })
    },

    //图片压缩
    imgCompress(path, obj) {
        //path是指上传的图片，obj是压缩的品质，越低越模糊
        var img = new Image();
        img.src = path.src;
        return new Promise((resolved, rejected) => {
            img.onload = function () {
                var that = this; //这里的this 是把img的对象指向改变为that
                // 默认按比例压缩
                var w = that.width,
                    h = that.height,
                    scale = w / h;
                w = obj.width || w;
                h = obj.height || w / scale;
                var quality = 0.8; // 默认图片质量为0.7
                //生成canvas
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = w;
                var anh = document.createAttribute("height");
                anh.nodeValue = h;
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(that, 0, 0, w, h);
                // 图像质量
                if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
                    quality = obj.quality;
                }
                var base64 = canvas.toDataURL("image/jpeg", quality);
                // 回调函数返回base64的值
                var urlFile = picture_ompression.convertBase64UrlToBlob(base64); //这个地方的处理是为了把压缩的base64转化为对象，获得压缩后图片的大小size，方便对压缩后的图片再次进行判断；
                let files = new window.File([urlFile], path.name, {
                    type: urlFile.type
                })
                var objData = {}
                objData.imgUrl = base64
                objData.imgFiles = files
                // 返回最后的值
                resolved(objData)
            }
        })
    },

    // 此处函数对压缩后的base64经过处理返回{size: "", type: ""}
    convertBase64UrlToBlob(urlData) {
        var arr = urlData.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
            type: mime
        });
    },


}
export default picture_ompression
