var AWS = require('aws-sdk')

var pinpoint = new AWS.Pinpoint()

pinpoint.putEvents({
  "ApplicationId": "662e86eb670e445baa1eaa7da3d88e2c",
  "EventsRequest": {
    "BatchItem": {
      "1": {
        "Endpoint": {
          "Address": "jpetto+pinpointen40@getpocket.com",
          "Attributes": {
            "Amount": ["$44.99"],
            "PlanType": ["annual"],
            "RenewDate": ["03\/11\/21"],
            "ReceiptId": ["sub_GtNJ1NfdAtxvmI"],
          },
          "ChannelType": "EMAIL",
          "Demographic": [],
          "EffectiveDate": "2020-03-11T14:50:16-05:00",
          "EndpointStatus": "ACTIVE",
          "OptOut": "NONE",
          "User": {
            "UserId": "24060910",
            "UserAttributes": {
              "Platform": ["unknown"],
              "Type": ["stable"],
              "ApiId": ["86291"],
              "Locale": ["en-US"],
              "FirstName": ["Walter"],
              "LastName": ["Sobcheck"],
              "IsPremium": ["true"],
              "CreatedAt": ["2020-03-11T14:48:44-05:00"],
            },
          },
        },
        "Events": {
          "Event": {
            "EventType": "Reset Password",
            "Attributes": {
              "Locale": "en-US"
            },
            "Session": { "Id": "pocket-pinpoint-5e6940f82b202", "StartTimestamp": "2020-03-11T14:50:16-05:00" },
            "Timestamp": "2020-03-11T14:50:16-05:00",
          },
        },
      },
    },
  },
}, (err, data) => {
  console.error(err);
  console.log(data);
});
