#! /bin/bash

BUILDPATH="$1protos"
SPECDIR=$2
TEMPLATEDIR="$3"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "make the base types"
for t in `find $DIR/../_baseTypes -name '*.type.spec'`;
do
 protofile="`basename -s .type\.spec $t`.proto"

FOLDER=$(cat $t \
 | grep package \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]' \
 | sed 's/\./\//g')


PROTOFILE=$(cat $t \
 | grep name \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]')

mkdir -p $BUILDPATH/$FOLDER

 simple-generator -d $t -t $TEMPLATEDIR/single.message.proto.tmpl > $BUILDPATH/$FOLDER/$PROTOFILE.proto
done


echo "make the specs"
for t in `find $SPECDIR -name '*.type.spec'`;
do
 protofile="`basename -s .type\.spec $t`.proto"

FOLDER=$(cat $t \
 | grep package \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]' \
 | sed 's/\./\//g')


PROTOFILE=$(cat $t \
 | grep name \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]')

mkdir -p $BUILDPATH/$FOLDER

 simple-generator -d $t -t $TEMPLATEDIR/single.message.proto.tmpl > $BUILDPATH/$FOLDER/$PROTOFILE.proto
done


echo "make the services"
for t in `find $SPECDIR -name '*.service.spec'`;
do

 FOLDER=$(cat $t \
 | grep package \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]' \
 | sed 's/\./\//g')


PROTOFILE=$(cat $t \
 | grep name \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]')

 mkdir -p $BUILDPATH/$FOLDER
 simple-generator -d $t -t $TEMPLATEDIR/single.service.proto.tmpl > $BUILDPATH/$FOLDER/$PROTOFILE.proto
done
