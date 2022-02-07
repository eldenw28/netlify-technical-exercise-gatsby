import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TechExercise = () => (
  <Layout>
    <Seo title="Netlify Technical Exercise" />
    <h3>Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you solved it.</h3>
    <p>I created this site by simply following the prompts on Netlify. I chose Gatsby because I'd already created and uploaded a React project earlier this week. While I'm no React expert, I wanted to stick with something that was based on what I'd already been using. It was a slick process and I encountered no issues so I'll refer to my earlier attempt. I spun that site up locally and used git to upload it to Github.</p>
    <p>I encountered difficulty in the creation of my first site. That process got me into what I like to think of as the linux reverse onion. (I.e. You try to solve a problem, only to run into another encompassing problem that prevents you from solving the first, expanding out from the core issue. This can go on for multiple onion layers on a bad day.) I couldn't create a React site because I had an old version of node installed and needed to upgrade. I couldn't update node because my version of npx was also too old. Luckily, my issues were limited to two onion layers in this case and I was able to get the problems resolved fairly easily.</p>
    <h3>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</h3>
    <p>Again, the process was very streamlined. It almost felt too easy. I always expect to run into some sort of issue so it almost felt creepy for it to work right away. Because I expect to have problems, I did actually fool myself on my first attempt so I'll again refer to that experience.</p>
    <p>After uploading the initial site, I wanted to see what happened if I made a change so I made a change and pushed it up to Github. I then popped over to Netlify and kicked off a build, assuming that I had to be involved in the work somehow. After the build was complete, I checked the build list I noticed there was an additional build that I'd not initiated manually. I realized at that point that merely pushing my edit up to Github had already triggered a build (which in hindsight I should have realized is the whole idea behind Netlify) and my second build was superfluous. I verified this by making another change, pushing up my changes and just waiting this time. Sure enough, Netlify built the new site automatically. I was impressed and felt empowered.</p>
    <h3>Rank your 5 favorite, and 5 least favorite, activities from this list: <a href="https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6">https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6</a></h3>
    <p>Same caveat as yours: these are in no particular order. Also, just because something's not in the top 5 doesn't mean I don't like doing it. :)</p>
    <p></p>
    Like:
    <ul>
      <li>Manage a Support team.</li>
      <li>Write and maintain documentation for our software and blog posts for our website.</li>
      <li>Spot trends across many cases to improve Netlify's product and service.</li>
      <li>Help train and onboard new support teammates.</li>
      <li>Set up your own copy of several static site frameworks for debugging.</li>
    </ul>
    <p></p>
    Dislike:
    <ul>
      <li>Create video tutorials to help teach users a specific feature or use case.</li>
      <li>Respond to Netlify customers on Twitter.</li>
      <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems.</li>
      <li>Work with prospective customers to explain our service and the pricing model</li>
      <li>Submit bug reports and potentially bug fixes to closed and open source projects that Netlify maintains on GitHub</li>
    </ul>
    <h3>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</h3>
    <p></p><a href="https://developer.chrome.com/docs/devtools/network/">https://developer.chrome.com/docs/devtools/network/</a>
    <p>I used the chrome dev tools for troubleshooting back at Jama but since it's been so long, I felt I needed a refresher. Reading this Chrome developer page did the trick. It's laid out really well and covers everything I wanted to know. The writing itself is thorough but accessible. I like screenshots and they provided good ones that made it so that just about anyone would be able to follow along. They provided examples of the things a person would need to do to use the dev tools effectively. There's a good table of contents. Finally, they provided a link to additional content for a deeper dive which was also excellent and informative.
    </p>
    <h3>Why do you think SSL/HTTPS is important? Please provide at least 3 reasons.</h3>
<p>SSL/HTTPS are the fundamental technology underpinning all web security.</p>
<ul>
<li>They provide confidence that you are communicating with whom you think you are.</li>
<li>They prevent a bad actor from viewing and/or stealing your communication/data.</li>
<li>They prevent a bad actor from modifying data in-transit.</li>
</ul>
<h3>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical customers hosting websites.</h3>
<ol>
<li>Initial setup. If you're using one of the more modern registrars, it should be fairly simple. Those services have spent a lot of time trying to make the process easy. If you're using an older, smaller or just less user-friendly registrar, you can get lost in the weeds trying to get your domain working. Also, someone might not yet know about basic concepts like A records and CNAMEs so it can all appear to be alphabet soup at first.</li>
<li>Not understanding DNS propagation and TTL. DNS changes aren't instantaneous but people might think they are if they don't know that. That could lead to not thinking a change/configuration has worked because they didn't wait long enough and then trying to "fix" it by making additional changes that just exacerbate the problem. Also, DNS changes require planning which might get a cowperson programmer/admin into trouble.</li>
</ol>
<h3>A customer writes in saying their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? Please compose your best customer-facing answer.</h3>
<p>The way I started troubleshooting this issue was to do a Google search. I'll admit that based on what I found I may have gotten too far into the weeds. After thinking about it overnight, I scaled back a little. Let's start with the customer-facing answer that I think would be appropriate for a first response:</p>
-----
<p>Hi customer name</p>
<p>Thank you for reaching out to us. I took a look at your build logs and found the following error:<i>Build failed due to a user error:  Build script returned non-zero exit code: 2.</i></p>
<p>The first thing I'd like to know is if you are able to perform a successful build on your local machine. Could you please verify that you can build locally without errors?</p>
<p>If you can build locally, could you please navigate to your site on Netlify, select the <b>Deploys</b> tab, click the <b>Deploy Settings</b> button and send me a screenshot of your <b>build settings?</b></p>

<p>Thanks,</p>
<p>Elden</p>
-----
<p>Based on my understanding of what I could find about this error, it seems like the <i>...code: 2</i> error is a high-level error indicating a misconfiguration, syntax error or, perhaps missing assets. If you dig deeper into the logs, you should be able to find more specifics. After reading many pages that contained a myriad of different specific errors, I decided that I was going too far down the path of trying to troubleshoot someone's build which is why I pulled back in my customer response.</p> 
<p>I wanted to start with two basic questions. First, if you can't build locally, I believe that may be outside of our scope at Netlify and the customer needs to resolve those issues before they try to deploy on Netlify. (Incidentally, I caused this issue myself by leaving a floating tag on my index.js page. The error message told me exactly which page and line of code I needed to look at.) Second, several of the pages I found seemed to indicate that the build failures could be related to warnings rather than actual errors that the customer's local build is set to ignore but Netlify does not, or they may have customized the build command in a way that caused an issue. This is why I asked for the screenshot of their build settings. I want to see what build command they are using without the possibility of typos. I assume that Netlify pre-configures the build command based on the programming language being used. Still I would compare their build command to the commands listed in <a href="https://docs.netlify.com/configure-builds/common-configurations/">https://docs.netlify.com/configure-builds/common-configurations/.</a></p>
<h3>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything How about a proxy redirect? Please add that proxy redirect rule to your site.</h3>
<Link to="/netlify/anything">/netlify/anything proxy link</Link> <br />
<p></p>
<p>I found three methods in to perform a redirect.</p>
<ol>
  <li>Creating a netlify.toml file located in the root directory of a project in which you define your redirect rules.</li>
  <li>Creating a folder named static at the root level of a project inside of which you create a _redirect file containing your redirect rules.</li>
  <li>Using the netlify-gatsby-plugin which creates a _redirects file at the root of the public folder in which you can use the createRedirects action to define your redirect rules.</li>
</ol>
<p>I wanted to get a redirect working prior to answering this question and ran into a lot of trouble. I'm not going to regale you with all of my trials and tribulations but suffice it to say that I learned that Gatsy has a built in router that was preventing me from getting it working the way I expected using one of the existing pages in the sample project. The key discovery that helped me learn about this was when I realized that while I couldn't click on one of the links and get a successful redirect, I could get it to redirect if I entered the url directly into the search bar.</p>
<p>The proxy redirect above was accomplished using a _redirect file. I can sometimes be a bit of a perfectionist so I'd like to have done it again using the netlify.toml file as that feels like the most "Netlify" way. It's entirely possible I could now get that working fairly quickly now because of what I learned, but considering how much time I've already spent on this question I'm going to call it good and move on.</p>
<h3>Please attempt to deploy a function on our service. This need not be complicated, could be "Hello World" or something fancier. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot, instead. We won't be asking you to share the function (but you can if you want to!), we just want to hear about the experience in some detail.</h3>
<p><a href="https://confident-darwin-dcaba1.netlify.app/.netlify/functions/hello">Hello World Function I created manually</a></p>
<p><a href="
https://confident-darwin-dcaba1.netlify.app/.netlify/functions/hello-world">Hello World Function I created using netlify cli</a></p>
<p>I really didn't run into any trouble on this question. I just followed the Netlify documentation. I wanted to use the default path so I created the /netlify/functions directory at the root of my project. I then created the file hello.js in that directory and pasted the code sample hello world code snippet Netlify provided. That's the first link above. For the second, I used the netlify cli running the <i>netlify functions:create</i> command which prompted me to select the language to use, offered me a hello world sample and then left the default name of hello-world. This created a sub-folder named hello-world within my netlify/functions directory and auto-generated a file within named hello-world.js.</p>
<p>I realize that a real developer would then have added code above that displayed the result of hello world in-line on this page. As I'm not a developer, I went with the quick and dirty method of providing a link to click in order to test the function. I found the links to use by navigating to the functions tab on Netlify, clicking the function and copying the endpoint url.</p>
<h3>We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will still leave the true impression that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</h3>
<p>Wow. This question triggers some interesting emotions. :) You say I can't confirm the problem yet. I've received the report from a user and the behavior, if true, has me deeply concerned. I've tried to reproduce the issue and been unable to do so but I don't think the user is wrong. I just think I don't have the tools to figure it out. Let's break it down:</p>
<ul>
  <li>I send an initial response to the reporter thanking them for bringing the issue to our attention and letting them know we're looking into it. I commit the team to keeping them informed.</li>
  <li>Due to the potential severity of the issue, I don't want to spend all day banging on the issue in my own little silo like I might be tempted to do for something of lesser severity. Speed is more important. I spend 15-30 minutes trying determine the nature of the problem on my own. This investigation is how I arrived at the conclusion that there's a reasonable chance the report is correct.</li>
  <li>This is a security issue, not an outage so the next thing to do is not panic. Any investigation and mitigation will take as long as it takes. My role at this point is to facilitate communication.</li>
  <li>I escalate to someone with the proper expertise. If I've been working at Netlify for a little while now, I should know who that is and follow the proper communication procedure. Based on what I've already learned about how communication is handled at Netlify I would expect this to be a combination of Slack, email and most likely some kind of cross-departmental ticketing system. I'm not sure if Zendesk is just used for support. Perhaps that's Zendesk. </li>
  <li>At this point I also notify my manager and let them know I've escalated an issue.</li>
  <li>I let the rest of the support team know there's a hot issue that needs to be monitored and let them know I've committed to the original reporter that we're going to keep them informed.</li>
  <li>I monitor the issue's progress to make sure it's being addressed. I keep reaching out to the 'correct' people until I get confirmation that there's been a successful handoff, most likely to someone in dev.</li>
  <li>I send an update to the original reporter letting them know that the issue has been escalated internally and again let them know that we will continue to keep them updated. How this is done will depend on how the issue was reported. If via Zendesk, then we use Zendesk/email. I'm not sure how we'd want to handle it if it came in via the forums. I understand that two of our team members are forum-focused. I'd bring the issue to their attention and get their guidance on how to handle it or let them take the lead.</li>
 <li>We continue to monitor the progress of the issue so that we can keep the original reporter up-to-date and let them know when the issue is resolved.</li>
 <li>Once the issue is resolved, we need to thank the person who reported it. They're definitely getting some swag or whatever kinds of things we're empowered to provide to someone who helped us out with something that important.</li>
  </ul> 
  <p>Caveat - I'm going to end up working hours where the 'correct' person might be unavailable so raising a red flag might be more difficult. I know Netlify is geographically diverse so there may actually be a 'correct' person available during my hours. I just don't know. If there isn't someone online, I'm going to assume there's someone designated to be on-call and this may be a time to engage the on-call protocol. I don't mean the support on-call here. I mean, I'm support. We already know. I mean some kind of dev on call. But, as I said at the earlier, this is a security issue, not an outage so It really depends on the situation. Interrupting someone's off-hours or waking someone up should be a last resort.</p>
<h3>(optional/bonus) Could you give us a suggestion to improve this test or the job posting?</h3>
<p>To be honest, I'm pretty worn out by the process right now so I don't much additional feedback today. I will be thinking about it because that's just how I'm wired. :) I'll be sure to make some notes and share them if I come up with anything.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default TechExercise