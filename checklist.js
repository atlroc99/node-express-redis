const checklist = [
    {
        id: 1,
        name: 'iTSecurityDocReviewedAndApproved',
        isChecked: false,
        label: 'IT security documents on BACnet/SC & i-Vu® Cloud reviewed and approved'
    },
    {
        id: 2,
        name: 'outboundPortEnabled',
        isChecked: false,
        label: 'Outbound Port availability (port 443 as default) enabled. (Following the IT Security documents listed above, BACnet/SC requires outbound communication to the cloud hosted BACnet/SC hub. If IT requires the i-Vu® Service URL to be whitelisted, note this on the provisioning form when ordering the license.)'
    },
    {
        id: 3,
        name: 'certAuthIdentified',
        isChecked: false,
        label: 'Certificate authority identified which will be used to generate BACnet/SC certificates'
    },
    // {
    //     id: 4,
    //     name: 'ivuProUpgraded',
    //     isChecked: false,
    //     label: 'I-Vu® Pro has been upgraded to the latest version and patch. If running I-Vu® Standard or Plus, these must also be upgraded to I-Vu Pro and placed on a temporary PC. A dealer license may be used to perform this upgrade if the customer license is not at version 8+. (~2-4 hours)'
    // },
    // {
    //     id: 5,
    //     name: 'uSBRouterUpdated',
    //     isChecked: false,
    //     label: 'USB Routers have been updated to XT Routers/Gateways. I-Vu® Standard and Plus systems using USB Adapters to connect to serial MS/TP networks are not supported by I-Vu® Pro. These would need to be replaced by a XT router or gateway'
    // },
    // {
    //     id: 6,
    //     name: 'userRouterUpdated',
    //     isChecked: false,
    //     label: 'All IP devices to be connected to I-Vu® Cloud service are XT-RB (Interim). A XT-RB may be used to route BACnet/IP traffic from legacy devices or be replacement of those devices. (~4-6 hours per router)'
    // },
    // {
    //     id: 7,
    //     name: 'siteHasLocalBackeup',
    //     isChecked: false,
    //     label: 'The site has a local backup of the I-Vu® database. Although it’s highly unlikely to have any data loss, it’s always a best practice to make a backup onto another drive. (~2 hours)'
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
    //     label: 'Onboarding Training Schedule. Onboarding Training has been scheduled with all appropriate users of i-Vu Cloud'
    // },
    // {
    //     id: 14,
    //     name: 'onboardingTrainingConducted',
    //     isChecked: false,
    //     label: 'Onboarding Training Conducted. Onboarding Training has been conducted, and i-Vu Customer Success Manager was included'
    // },
    // {
    //     id: 15,
    //     name: 'customerHasPortalAccess',
    //     isChecked: false,
    //     label: 'Customer Portal Access. i-Vu cloud users have been identified, given credentials to the Customer Portal, and access has been verified'
    // },
    // {
    //     id: 16,
    //     name: 'syncComplete',
    //     isChecked: false,
    //     label: 'Sync Complete. ALC Migration team will verify that the Initial sync is complete'
    // }
]

module.exports = checklist