FROM mageia:latest
MAINTAINER josquin64@laposte.net <Josquin CORNEC>
RUN urpmi --auto-update
RUN urpmi --force --auto npm git nodejs
RUN urpmi --force --auto tomcat
WORKDIR MyCarFrontEnd
RUN git clone https://github.com/Joalien/MyCarFrontEnd.git
RUN npm install

#Not in cache
RUN git pull
RUN npm install
RUN npm run build --prod


#Installation of Tomcat
RUN mv www/ /var/lib/tomcat/webapps/
RUN systemctl start tomcat

EXPOSE 8100

