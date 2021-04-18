---
title: "Deliver bug-free with Slack bots"
slug: deliver-bug-free
cover: ./cover2.jpg
date: 2021-04-18
generate-card: True
imageShare: ./deliver-bud-free-share.png
language: en
tags:
    - tech
    - devops
    - testing
    - productivity
---

It's every engineer's dream to deliver bug-free code, having a constant eye for catching those edge cases is the most important part to reach that. Working on a data-search product for a year, I have realized regular testing and health checks are quite important regularly just to make sure general sanity for the product.

Slack has been an important tool for us, not only for communication but also for delivering good products. Initially used as a tool to maintain communication among the team, I have thought of ways in which we can integrate slack for having the ease of consideration of tests and feedbacks at the dev level.

Most of the processes, I have worked on, uses slack just to notify about the results. One can use any other tool of choice to replicate the same. But slack's bot network was quite helpful in making this easy to implement and scalable. I have use slack api python client, directly using api and other clients also work.


## Example Pipelines -

### Testing:

Taking example of our data-search product, data is updated daily and we have to make sure the sanity of it till frontend of our products. We use regular test runs and slack bot to notify about the same to make it seamless across the team.

code sample:

`test.sh` a simple bash script to test the service and sending out results to slack, which eases the process of not referring to a dashboard for the same

```
    #!/bin/bash

    echo "*********************"
    echo "* Testing *"
    echo "*********************"
    echo "Running tests"
    echo "............................"
    run_test --parallel=8 2>&1 | tee -a ./test_result.txt

    echo "****************************"
    echo "*Sending Results to Slack*"
    echo "****************************"
    python3 slack_message.py

```
`slaclk_message.py` utilizes standard code base of slack api client in python to have a bot sending out the results in specific channel

```
    import os
    from slack import WebClient
    from slack.errors import SlackApiError

    def status(str):
        if "OK" in str:
            return "OK"
        else:
            return "FAILING"

    test_resp = open('test_result.txt', 'r').read().replace('\n', ' ')

    test_status = status(test_resp)

    client = WebClient(token='SLACK_BOT_TOKEN')

    try:
        response = client.chat_postMessage(
            channel='#CHANNEL_NAME',
            text=""" Service status : {test_status}""".format(test_status=test_status))
    except SlackApiError as e:
        assert e.response["ok"] is False

```

### Quality assurance(getting edge cases and more):

Notify if the quality of results from an API or Service degrade below certain threshold. Getting feedback from the user is quite important for improving the quality and they do the free labor for you by using your product. We can use similar slack client to notify about the same.

### Health-monitor:

Keeps track of production infrastructure, and give health checks if utilization goes beyond limit

### Random use-cases:

* It can be used with different analytics tools like metabase to send regular insights about your products

* One of team member uses this to keep track of indexing for one of the service


Possibilities are endless. These processes apply well for early-stage startups but might get out of hand easily for managing large infrastructure. But I think similar pipelines will help to catch those production and tailor your products in line with the expectations of your clients.

Do share feedbacks and some better pipelines you can think of

