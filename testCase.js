const data = {
    'data': {
        'iTSecurityDocReviewedAndApproved': true,
        'outboundPortEnabled': true,
        'certAuthIdentified': true,
        'ivuProUpgraded': true,
        'uSBRouterUpdated': true,
        'userRouterUpdated': true,
        'siteHasLocalBackeup': true,
        'agentInstalled': true,
        'migrationLinkSupplied': true,
        'syncValidated': true,
        'screenshotsCaptured': false,
        'credentialsCreated': true,
        'onboardingTrainingScheduled': true,
        'onboardingTrainingConducted': true,
        'customerHasPortalAccess': true,
        'syncComplete': true,
    }
}

json_data = data.data;
const values = Object.values(json_data);
console.log(values);
const isComplete = values.every(value => value === true);
console.log('isComplete:', isComplete);