FROM armv7/armhf-fedora
MAINTAINER "Josquin CORNEC" <josquin64@laposte.net>
RUN dnf install -y git nodejs npm
RUN npm install -g ionic
EXPOSE 8100
WORKDIR /usr/local/tomcat/MyCarFrontEnd
CMD ionic serve --prod
