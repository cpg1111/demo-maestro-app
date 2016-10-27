FROM python:3.5.1-slim
MAINTAINER Christian Grabowski (github.com/cpg1111)
ADD . /opt/src/db/
RUN apt-get update && apt-get install -y build-essential && pip install txmongo==16.1.0 umongo==0.9.0
ENTRYPOINT ["python"]
