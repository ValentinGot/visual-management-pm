import CriticalReporter from "./critical-reporter/critical-reporter.component.vue"

export default {
  name      : 'Sonar Plugin',
  id        : 'sonar-plugin',
  components: [
    {
      name         : 'Critical reporter',
      tag          : 'critical-reporter',
      vue          : CriticalReporter,
      config       : {
        projectId: 0
      },
      defaultWidth : 1,
      defaultHeight: 1
    }
  ]
}
