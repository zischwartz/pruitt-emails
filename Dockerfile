FROM jupyter/datascience-notebook

# docker run -it --rm -p 8888:8888 jupyter/datascience-notebook
RUN pip install -U gensim

# ADD Produce-1600-2541-Redacted.txt Produce-1600-2541-Redacted.txt

# https://github.com/jupyter/docker-stacks/tree/master/datascience-notebook

# Downloaded model here
# https://docs.google.com/uc?id=0B7XkCwpI5KDYNlNUTTlSS21pQmM&export=download
# via
# http://mccormickml.com/2016/04/12/googles-pretrained-word2vec-model-in-python/


# docker build -t zischwartz/datascience-notebook-gensim .
# docker run -it --rm -p 8888:8888 zischwartz/datascience-notebook-gensim
