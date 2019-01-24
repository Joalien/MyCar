# Pi:
#FROM armv7/armhf-fedora
# x86A:
FROM mageia:6
MAINTAINER "Josquin CORNEC" <josquin64@laposte.net>
#Initialisation du back end
RUN urpmi.addmedia --probe-hdlist --distrib mga http://distrib-coffee.ipsl.jussieu.fr/pub/linux/Mageia/distrib/6/x86_64
RUN urpmi.update -a
RUN urpmi --auto --force maven
WORKDIR /usr/local/tomcat/MyCarBackEnd
COPY pom.xml /usr/local/tomcat/MyCarBackEnd
RUN mvn dependency:resolve
EXPOSE 8001

#Lancement du container
CMD mvn install && java -jar target/swagger-spring-1.0.0.jar
