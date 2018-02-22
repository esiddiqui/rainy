FROM openjdk:8-jre
LABEL maintainer="ehteshamsiddiqui@gmail.com"

RUN mkdir -p /opt/ehtesham/rainy
ADD target/rainy-service*.jar /opt/ehtesham/rainy
WORKDIR /opt/ehtesham/rainy

EXPOSE 9001

CMD java -jar *.jar com.es.rainy.RainyServiceAppliation
CMD [ "sh", "-c", "java -jar *.jar com.es.rainy.RainyServiceAppliation" ]
