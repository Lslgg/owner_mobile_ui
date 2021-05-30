#!/usr/bin/expect
#set timeout 20 #设置超时时间
#上传文件到服务器
spawn scp  ./owner.tar lslgg@120.79.205.43:/home/UI/erp/mobile/
expect "password:"
send "Lslgg666&0089\r"
interact