#!/usr/bin/env bash

set -o errexit
set -o pipefail

mkdir -p ~/.aws && echo ${AWS_CREDENTIALS_FILE} | base64 -d > ~/.aws/credentials
