const checklist = [
    {
        id: 1,
        name: 'iTSecurityDocReviewedAndApproved',
        isChecked: false,
        label: 'IT {systemName}® documents on BACnet/SC & {systemName}® Cloud reviewed and approved'
    },
    {
        id: 2,
        name: 'outboundPortEnabled',
        isChecked: false,
        label: 'Outbound Port {systemName}® (port 443 as default) enabled. (Following the IT Security documents {systemName}® above, BACnet/SC requires outbound communication to the cloud hosted BACnet/SC hub. If IT requires the {systemName}® Service URL to be whitelisted, note this on the provisioning form when ordering the license.)'
    },
    {
        id: 3,
        name: 'certAuthIdentified',
        isChecked: false,
        label: 'Certificate authority {systemName}® identified which will be used to {systemName}® generate BACnet/SC certificates'
    },
    // {
    //     id: 4,
    //     name: 'systemProUpgraded',
    //     isChecked: false,
    //     label: '{systemName}® Pro has been upgraded to the latest version and patch. If running {systemName}® Standard or Plus, these must also be upgraded to {systemName} Pro and placed on a temporary PC. A dealer license may be used to perform this upgrade if the customer license is not at version 8+. (~2-4 hours)'
    // },
    // {
    //     id: 5,
    //     name: 'uSBRouterUpdated',
    //     isChecked: false,
    //     label: 'USB Routers have been updated to XT Routers/Gateways. {systemName}® Standard and Plus systems using USB Adapters to connect to serial MS/TP networks are not supported by {systemName}® Pro. These would need to be replaced by a XT router or gateway'
    // },
    // {
    //     id: 6,
    //     name: 'userRouterUpdated',
    //     isChecked: false,
    //     label: 'All IP devices to be connected to {systemName}® Cloud service are XT-RB (Interim). A XT-RB may be used to route BACnet/IP traffic from legacy devices or be replacement of those devices. (~4-6 hours per router)'
    // },
    // {
    //     id: 7,
    //     name: 'siteHasLocalBackeup',
    //     isChecked: false,
    //     label: 'The site has a local backup of the {systemName}® database. Although it’s highly unlikely to have any data loss, it’s always a best practice to make a backup onto another drive. (~2 hours)'
    // },
    // {
    //     id: 8,
    //     name: 'agentInstalled',
    //     isChecked: false,
    //     label: 'Agent Installed. this is the agent that will sync with your current site to complete the migration to the cloud'
    // },
    // {
    //     id: 9,
    //     name: 'migrationLinkSupplied',
    //     isChecked: false,
    //     label: 'ALC Migration Team will supply a link for the migration agent that needs to be installed'
    // },
    // {
    //     id: 10,
    //     name: 'syncValidated',
    //     isChecked: false,
    //     label: 'Validation of Sync. ALC Migration Team will validate that the agent has installed correctly, and that the system sync has started'
    // },
    // {
    //     id: 11,
    //     name: 'screenshotsCaptured',
    //     isChecked: false,
    //     label: 'Baseline System Metrics. Capture screenshots of your baseline system metrics, before the migration has been scheduled'
    // },
    // {
    //     id: 12,
    //     name: 'credentialsCreated',
    //     isChecked: false,
    //     label: 'Credentials Created. Temporary user access has been given to user Migration Ops Team Member. Credentials sent directly to (x) group'
    // },
    // {
    //     id: 13,
    //     name: 'onboardingTrainingScheduled',
    //     isChecked: false,
    //     label: 'Onboarding Training Schedule. Onboarding Training has been scheduled with all appropriate users of {systemName} Cloud'
    // },
    // {
    //     id: 14,
    //     name: 'onboardingTrainingConducted',
    //     isChecked: false,
    //     label: 'Onboarding Training Conducted. Onboarding Training has been conducted, and {systemName} Customer Success Manager was included'
    // },
    // {
    //     id: 15,
    //     name: 'customerHasPortalAccess',
    //     isChecked: false,
    //     label: 'Customer Portal Access. {systemName} cloud users have been identified, given credentials to the Customer Portal, and access has been verified'
    // },
    // {
    //     id: 16,
    //     name: 'syncComplete',
    //     isChecked: false,
    //     label: 'Sync Complete. ALC Migration team will verify that the Initial sync is complete'
    // }
]

module.exports = checklist