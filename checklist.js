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
    }]

module.exports = checklist

// const checklist = {
//     isSubmitted: false,
//     items: [
//         {
//             id: 1,
//             name: 'iTSecurityDocReviewedAndApproved',
//             isChecked: false,
//             label: 'IT security documents on BACnet/SC & i-Vu® Cloud reviewed and approved'
//         },
//         {
//             id: 2,
//             name: 'outboundPortEnabled',
//             isChecked: false,
//             label: 'Outbound Port availability (port 443 as default) enabled. (Following the IT Security documents listed above, BACnet/SC requires outbound communication to the cloud hosted BACnet/SC hub. If IT requires the i-Vu® Service URL to be whitelisted, note this on the provisioning form when ordering the license.)'
//         },
//         {
//             id: 3,
//             name: 'certAuthIdentified',
//             isChecked: false,
//             label: 'Certificate authority identified which will be used to generate BACnet/SC certificates'
//         }]
// }
// module.exports = checklist