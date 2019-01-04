# PI
FROM hypriot/rpi-mysql
# x86
#FROM mariadb:10.1
MAINTAINER josquin64@laposte.net <Josquin CORNEC>
EXPOSE 3306
RUN grep -vE '^mysql' /etc/passwd > /tmp/1
RUN echo "mysql:x:983:980:system user for mariadb:/var/lib/mysql:/bin/bash" >> /tmp/1
RUN cp /tmp/1 /etc/passwd
RUN find / -uid 999 -print0 | xargs -0 chown 983 
RUN find / -gid 999 -print0 | xargs -0 chgrp 980 
