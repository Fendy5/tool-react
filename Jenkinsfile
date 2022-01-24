pipeline {
  agent any
  stages {
    stage('Git Pull') {
      steps {
        git(credentialsId: 'github', branch: 'main', url: "https://github.com.cnpmjs.org/Fendy5/${env.ItemName}.git")
      }
    }

    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 16.9.1', configId: '2c822994-4519-4187-90c4-71d6ccee785d') {
          sh 'yarn install'
          sh 'yarn build'
        }
      }
    }

    stage('Deploy') {
      steps {
       sh "rm -rf /www/wwwroot/tool.fendy5.cn/build"
       sh "mv ./build /www/wwwroot/tool.fendy5.cn"
      }
    }

  }
  environment {
    ItemName = 'tool-react'
  }
  options {
    skipDefaultCheckout(true)
  }
}
