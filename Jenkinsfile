#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Sonar') {
      sh 'ls -a'
      sh 'docker run -i -v "$PWD:/opt/sonar" newtmitch/sonar-scanner -Dsonar.host.url=http://52.82.10.96:9000 -Dsonar.projectKey=panda-ui -Dsonar.projectName="panda-ui" -Dsonar.sources=./sonar/src -Dsonar.projectBaseDir=/opt -Dsonar.sourceEncoding=UTF-8 -Dsonar.login=718e7ca6ed91dfe1b706cce2339ea89fc4ab6f02'
    }
    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
