pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Buiding Docker image'
        sh '''#!/bin/bash
docker build dhr70/node-test:latest .
docker push dhr70/node:latest'''
        echo 'test'
      }
    }

  }
}