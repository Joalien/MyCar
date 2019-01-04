# Pi:
FROM armv7/armhf-fedora
# x86:
#FROM mageia:latest
MAINTAINER "Josquin CORNEC" <josquin64@laposte.net>
RUN dnf install -y nodejs npm
#RUN urpmi -auto --force nodejs npm
RUN npm install -g ionic
EXPOSE 8100
WORKDIR /usr/local/tomcat/MyCarFrontEnd
CMD ionic serve --prod
