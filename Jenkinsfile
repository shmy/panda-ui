#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }
    stage('Build') {
      environment {
        CI = 'true'
      }
      docker.image('sonarsource/sonar-scanner-cli').inside('-e SONAR_HOST_URL=http://52.82.10.96:9000 -e SONAR_LOGIN=718e7ca6ed91dfe1b706cce2339ea89fc4ab6f02 --user="$(id -u):$(id -g)" -it -v "$PWD/:/usr/src"') {
      }
    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
