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
        nodejs(nodeJSInstallationName: 'NodeJS 14.17.5', configId: '15077958-c5fc-4bdc-b6ed-803c700399b2') {
          sh 'cnpm install'
          sh 'cnpm run build'
        }
      }
    }

    stage('Deploy') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.17.5', configId: '15077958-c5fc-4bdc-b6ed-803c700399b2') {
          sh "rm -rf /www/wwwroot/tool.fendy5.cn/dist"
          sh "mv ./dist /www/wwwroot/tool.fendy5.cn"
        }
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
