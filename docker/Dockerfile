FROM centos:7.6.1810

# Install EPEL Repo
RUN rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm \
  && rpm -Uvh https://rpms.remirepo.net/enterprise/remi-release-7.rpm

RUN yum -y install yum-utils
RUN yum-config-manager --enable remi-php72

# Normal updates
RUN yum -y update

# Install Apache
RUN yum -y install httpd httpd-tools

# Install php
RUN yum -y install php72 php72-php php72-php-bcmath php72-php-cli php72-php-common php72-php-gd php72-php-intl php72-php-json php72-php-mbstring php72-php-pdo php72-php-pdo-dblib php72-php-pear php72-php-pecl-mcrypt php72-php-xmlrpc php72-php-xml php72-php-mysql php72-php-mysqlnd php72-php-pecl-zip php72-php-pecl-xdebug

# Install indexer
RUN yum -y install unzip poppler-utils catdoc

# Install others tools
RUN yum -y install nano

# tools
RUN yum -y install epel-release curl

RUN ln -s /usr/bin/php72 /usr/bin/php

# Install composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php \
  && php72 composer-setup.php --install-dir=/usr/local/bin --filename=composer

# Set config apache
ADD httpd/httpd.conf /etc/httpd/conf.d

# Create webserver-default directory
RUN mkdir -p /var/www/html

# Set locale
RUN localedef -i en_GB -f UTF-8 en_GB.UTF-8
ENV LANG en_GB.UTF-8

# Set working directory
WORKDIR /var/www/html

# Set port
EXPOSE 80

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
