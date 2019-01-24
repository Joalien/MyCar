# x86:
FROM mageia:6
MAINTAINER "Josquin CORNEC" <josquin64@laposte.net>
RUN urpmi.addmedia --probe-hdlist --distrib mga http://distrib-coffee.ipsl.jussieu.fr/pub/linux/Mageia/distrib/6/x86_64
RUN urpmi.update -a
RUN urpmi --auto --force nodejs npm
RUN npm install -g ionic @ionic/app-scripts
RUN urpmi --auto --force make
RUN npm rebuild node-sass --force
EXPOSE 8100
WORKDIR /usr/local/tomcat/MyCarFrontEnd
CMD ionic serve --prod
