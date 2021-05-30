#!/usr/bin/expect
#set timeout 20 #设置超时时间
#部署项目
spawn ssh lslgg@120.79.205.43 -p 22
expect "password:"
send "Lslgg666&0089\r"
expect "Last login:"
send "cd /home/UI/erp/mobile\r"
send "rm -rf owner\r"
send "tar -xvf owner.tar -C ./\r"
send "rm -rf owner.tar\r"
send "exit\r"
interact
