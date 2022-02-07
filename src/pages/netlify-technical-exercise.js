import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TechExercise = () => (
  <Layout>
    <Seo title="Netlify Technical Exercise" />
    <h3>Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you solved it.</h3>
    <p>I created this site by simply following the prompts on Netlify. I chose Gatsby because I'd already created and uploaded a React project earlier this week. While I'm no React expert, I wanted to stick with something that was based on what I'd already been using. It was a slick process and I encountered no issues so I'll refer to my earlier attempt. I spun that site up locally and used git to upload it to Github.</p>
    <p>I encountered difficulty in the creation of my site. That process got me into what I like to think of as the linux reverse onion. (I.e. You try to solve a problem, only to run into another problem that prevents you from solving the first, expanding out from the core issue. This can go on for multiple onion layers on a bad day.) I couldn't create a React site because I had an old version of node installed and needed to upgrade. I couldn't update node because my version of npx was also too old. Luckily, my issues were limited to two onion layers in this case and I was able to get the problems resolved fairly easily.</p>
    <h3>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</h3>
    <p>Again, the process was very streamlined. It almost felt too easy. I always expect to run into some sort of issue so it almost felt creepy for it to work right away. Because I expect to have problems, I did actually fool myself on my first attempt so I'll again refer to that experience.</p>
    <p>What I'd done on that site is after uploading the initial site, I wanted to see what happened if I made a change so I made a change and pushed it up to Github. I then popped over to Netlify and kicked off a build, assuming that I had to be involved in the work somehow. After the build was complete, I checked the build list I noticed there was an additional build that I'd not initiated manually. I realized at that point that merely pushing my edit up to Github had already triggered a build (which in hindsight I should have realized is the whole idea) and my second build was superfluous. I verified this by making another change, pushing up my changes and just waiting this time. Sure enough, Netlify built the new site automatically. I was impressed and felt empowered.</p>
    <h3>Rank your 5 favorite, and 5 least favorite, activities from this list: <a href="https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6">https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6</a></h3>
    <p>Same caveat as yours: these are in no particular order. :)</p>
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
    <p>I used the chrome dev tools for troubleshooting back at Jama but since it's been so long, I felt I needed a refresher. Reading this Chrome Developer page did the trick. It's laid out really well and covers everyting I wanted to know. The writing itself is thorough but accessible. I like screenshots and they provided good ones that made it so that just about anyone would be able to follow along. They provided examples of the things a person would need to so to use the dev tools effectively. There's a good table of contents. Finally, they provided a link to additional content for a deeper dive which was also excellent and informative.
    </p><h3>Why do you think SSL/HTTPS is important? Please provide at least 3 reasons.</h3>
SSL/HTTPS are the fundamental technology underpinning all web security.
<ul>
<li>They provide confidence that you are communicating with whom you think you are.</li>
<li>They prevent a bad actor from viewing and/or stealing your communication/data.</li>
<li>They prevent a bad actor from modifying data in-transit.</li>
</ul>
<h3>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical customers hosting websites.</h3>
<ol>
<li>Initial setup. If you're using one of the more modern registrars, it should be fairly simple. Those services have spent a lot of time trying to make the process easy. If you're using an older, smaller or just less user-friendly registrar, you can get lost in the weeds trying to get your domain working. I had trouble getting my domain working at first. I was using the same old registrar I'd used to purchase the domain 10-15 years ago and I just couldn't get it going. I don't even remember who it was at this point as I've blocked them out of my mind. I just ended up transferring my domains to Dotster so that the configuration was much more straight-forward. Again, it's been a while since I configured my blog so I don't actually remember the details but I know that post-transfer, it only took about 30 minutes to figure it out.</li>
<li>Not understanding DNS propagation and TTL. DNS changes aren't instantaneous but people might think they are if they don't know that. That could lead to not thinking a change/configuration has worked because you didn't wait long enough and then trying to "fix" it by making additional changes that just exacerbate the problem. Also, DNS changes require planning which might get a cowperson programmer/admin into trouble.</li>
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
<p>Based on my understanding of what I could find about this error, it seems like the <i>...code: 2</i> error is a high-level error indicating a misconfiguration or, perhaps missing assets. If you dig deeper into the logs, you should be able to find more specifics. After reading many pages that contained a myriad of different specific errors, I decided that I was going too far down the path of trying to troubleshoot someone's build which is why I pulled back in my customer response. I wanted to start with two basic questions. First, if you can't build locally, I believe that's outside of our scope at Netlify and the customer needs to resolve those issues before they try to deploy on Netlify. Second, several of the pages I found seemed to indicate that the build failures could be related to warnings rather than actual errors that the customer's local build is set to ignore but Netlify does not, or they may have customized the build command. This is why I asked for the screenshot of their build settings. I want to see what build command they are using without the possibility of typos. I assume that Netlify preconfigures the build command based on the programming language being used. Still I would compare their build command to the commands listed in <a href="https://docs.netlify.com/configure-builds/common-configurations/">https://docs.netlify.com/configure-builds/common-configurations/.</a></p>
<h3>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything How about a proxy redirect? Please add that proxy redirect rule to your site.</h3>
<p><a href="https://www.netlify.com/anything">/netlify/anything</a></p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default TechExercise