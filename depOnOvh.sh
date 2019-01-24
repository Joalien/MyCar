#!/bin/bash
vm='root@193.70.36.196'
rsync -av MyCarBackEnd MyCarFrontEnd DB docker-compose.yml $vm:~/MyCar
ssh $vm -t "cd MyCar && docker-compose up --build"
