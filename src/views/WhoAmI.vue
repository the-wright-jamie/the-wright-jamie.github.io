<template>
  <div>
    <h1 class="lg:text-4xl text-xl mb-4 header">whoami</h1>
    <h2 class="text-center font-extrabold tracking-[.35em] pb-4">Work in progress</h2>
    <div class="text-xl space-y-4 text-justify">
      <hr />
      <p class="italic">
        Once upon a time, a human being figured out how to imbue rocks with the power of
        electricity. Building upon the discoveries of those who came before them, they taught this
        rock how to think, to compute, and to connect with other supercharged rocks across the
        globe.
      </p>
      <p class="italic tracking-[.35em] font-extrabold text-center">
        And the world was never the same again.
      </p>
      <p class="italic">
        Today, apprentices of this new order refer to themselves as 'software engineers'...
      </p>
      <hr />
      <h2>Hi, I'm Jamie</h2>
      <img
        class="shadow-xl/50 block mx-auto md:float-left md:mr-6 mb-4 md:mb-0 h-48 md:h-64 md:w-64 rounded-2xl"
        src="../assets/img/me.jpg"
      />
      <p>I'm a security and software engineer from Northern Ireland.</p>

      <p>
        <span class="italic">"What exactly is a security AND software engineer?"</span>, I hear you
        ask.
      </p>

      <p>
        Well, by light, I help to ensure the security of the project I oversee by building tooling,
        monitoring infrastructure and security testing - security engineering. By night, I build,
        design and consult with clients to create bespoke software solutions and applications -
        software engineering. In between all that, I try to find the time for various creative and
        mind expanding pursuits of which include: game making, learning, music and general knowledge
        acquisition.
      </p>
      <p>
        Let's get to the brass tacts: What am I about? I consider myself to be a results-driven
        engineer. I have 6 years of industry experience in software development, infrastructure
        management, and security engineering. I have enhanced the security of projects I've worked
        on by developing custom tooling, monitoring infrastructure on AWS, helping to ensure SOC2
        compliance and performing informal penetration testing. I'm a big believer in the idea that
        'the impossible just takes a little longer'.
      </p>
      <p>
        What follows here is a <span class="font-extrabold">subjective recount</span> (i.e from my
        perspective, how I think and feel) of my life as it pertains to my interest in technology
        and my professional career. A more objective, fact based recount of my career can be found
        at <router-link class="underline" to="/projects">the Projects page</router-link>.
      </p>

      <h2>Professional Career</h2>
      <img
        class="shadow-xl/50 mx-auto md:float-right md:ml-6 mb-4 mt-4 md:mb-0 h-64 md:h-72 rounded-2xl"
        src="../assets/img/kainos-start.jpg"
      />
      <p>
        In 2019, I began my professional career as an Apprentice Software Engineer at Kainos. With
        my A-Levels not long behind me, and little real world knowledge of the corporate software
        world, I put my head up and did my best to keep up and contribute as quickly as possible. I
        started off in a project called
        <a
          class="underline"
          href="https://www.kainos.com/workday/products/smart-test"
          target="_blank"
          >WorkdaySmart</a
        >
        (now known as Kainos Smart Test). Here, I first contributed to the creation and maintenance
        of system tests and process flows which where important to ensuring that our integrations
        with Workday were remaining strong and any changes they made we were reactive to - helping
        to keep Smart Test ahead of the curve and our customers knowledgeable of any configuration
        changes or breakages.
      </p>

      <img
        class="shadow-xl/50 block mx-auto md:float-left md:mr-6 h-64 md:h-72 rounded-2xl"
        src="../assets/img/uni-start.jpg"
      />
      <p>
        In 2019, the same time as when I started working at Kainos, I started university. As part of
        my apprenticeship, I was going to university on Mondays and working at Kainos for the rest
        of the work week. In order to get uni coursework done, and avoid burning out at work, I had
        to develop careful time management skills.
      </p>
      <p>
        In 2020, the team I was working on shifted their focus to work on
        <a
          class="underline"
          href="https://www.kainos.com/workday/products/Smart-Audit-for-Workday"
          target="_blank"
          >Smart Audit</a
        >, where I began to be more front-end focused. I learnt about Angular, how to make more
        advanced user interfaces and how to build dynamic web applications (up until this point, I
        was used to just making simple websites with no libraries and adding simple reactivity with
        Javascript).
      </p>
      <p>
        In 2022, after taking a Systems Security module in university, I decided to moved roles at
        Kainos from a software engineer to a security engineer. This brought me to an emerging
        product at the time called
        <a
          class="underline"
          target="_blank"
          href="https://www.kainos.com/workday/products/Smart-Shield"
          >Smart Shield</a
        >
        (yes, still remaining within the Smart project). Since my time there, I have learned...
      </p>
      <p>
        In 2022 through 2023, for my university final year honours project, I created an Android
        application written in Kotlin and Jetpack Compose (a newly released technology at the time),
        and wrote the backend API for it in Express. For this project, a central API was planned so
        that it could be used across all sorts of interfaces, and allow other applications and
        projects to use the data that my project collected.
      </p>
      <p>
        The project was aimed to be a 'Google Maps' or 'TripAdvisor' for people with disabilities of
        all kinds. The data was intended to be crowdsourced, so users would be able to search for a
        location and review what other users had to say about it. Users could learn if a
        location/event/service had key features for accessibility, such as usable ramps (as opposed
        to difficult steep ramps), quiet spaces (for neurodiversity), no flashing lights (for
        epilepsy). If you aren't a person with disabilities, you'd be amazed to find how little use
        a lot of provided accommodations actually are. I also learnt a lot about accessibility
        within UI/UX and the importance of such during this project.
        <img
          class="shadow-xl/50 block mx-auto md:float-right md:ml-6 mb-4 mt-4 md:mb-0 h-64 rounded-2xl"
          src="../assets/img/graduation.jpg"
        />
        I finished working on this project in 2023, achieving a First Class Honours and subsequently
        graduating a Bachelors of Science in Computing Systems. I have wanted to revisit the concept
        and make it a fully realised service but unfortunately I have not had the time to do so - a
        lot of effort would have to go into making it usable (including serious overhaul of endpoint
        security and vandalism protection). Anyway, after graduating, I was offered to remain at
        Kainos and was promoted to full time Associate Security Engineer.
      </p>
      <p>
        In 2024, I started my largest solo project in Kainos to date. This was Lifeline. Since its
        completion, Lifeline has helped me stay ahead of new releases and helped my team plan ahead
        of dependency deprecations, saving us from having to frantically update dependencies and
        ensure that we rarely have to do major renovations or overhaul. While that may have a
        maintenance impact in the short term, compared to previous renovations we've had to do it
        has saved us countless hours in the long term.
      </p>
      <p>
        In 2025, I've been mostly focused on improving my own skills as a security engineer,
        learning new technologies and methodologies to better protect the projects I work on. I've
        also been renewing and creating documentation, building threat models and improving our
        incident response plans to ensure we're prepared for any potential security incidents.
      </p>

      <h2>Current Interests and Hobbies</h2>

      <img
        class="shadow-xl/50 block mx-auto md:float-left md:mr-6 mb-4 md:mb-0 w-64 md:w-72 rounded-2xl"
        src="../assets/img/hack.jpg"
      />

      <p>
        Outside of my day job, I still enjoy learning about new subject areas related to tech as
        well as 'hacking' around (not the 'breaking and entering' kind of hacking, more so the
        'technology enthusiast' kind). Every project I work on (outside of work) I try to make sure
        that I do something new every time. For example, for my university project, Kotlin and
        Jetpack Compose were completely new languages and frameworks to me at the time. More
        recently, I took on learning Vue for Lifeline (actually, this website is technically a fork
        of Lifeline, as I use it as a springboard to bootstrap new Vue projects rather than have to
        setup a new Vue project every time). Even more recently, for a private project for a
        personal client, I took on Golang to write the API, and I'm learning Nuxt for their
        front-end.
      </p>

      <img
        class="shadow-xl/50 block mx-auto md:float-right md:ml-6 mb-4 md:mb-0 w-64 md:w-72 rounded-2xl"
        src="../assets/img/computer-built.jpg"
      />
      <p>
        I also enjoy building and learning about how computers work. The image shows the computer
        that I built from parts that I sourced myself (that's not my desk, don't worry). I enjoy the
        challenge of picking out compatible parts, and the satisfaction of seeing it all come
        together and work at the end. Maybe a bit weird, but I really enjoy installing new operating
        systems on this computer so I can understand them and see what they can do. For a long time
        (mostly during COVID), I would do a lot of 'distro hopping' to see all that the Linux world
        has to offer. I really like Linux, I'm fascinated by the idea that professional, enthusiast
        and hobby programmers can all come together in one place and somehow make a cohesive piece
        of software that other professional, enthusiast and hobby programmers can build upon.
      </p>

      <p>
        Yes, gaming is a favorite past time of mine as well, although with everything else I'm up to
        I rarely have the energy for it. My favorite games/series are Yakuza, Minecraft,
        Half-Life/Portal, Need for Speed & Forza, Risk of Rain and Final Fantasy.
      </p>

      <p>
        In the future, I'm hoping to return to more creative pursuits. A few months ago, I had an
        interesting idea for a video game. I can't draw, I can't do 3D art, I'm terrible at creative
        writing so if I ever get round to trying that out it'll be interesting I'm sure. Knowing me,
        I'll get all the novel learning out of the way and never finish the project. I've tried
        making games in the past, they were terrible, so I'm sure this won't be any better.
      </p>
      <p>
        Outside of tech, I enjoy learning languages. I'm currently focused on Japanese (before you
        ask, no, I can't *speak* it, but I can understand and read a lot of basic stuff) but at some
        point I'd like to learn Gaeilge (Irish Gaelic). I used to enjoy making and playing music,
        but recently I haven't had much time for that. I can 'play' (not very well) the piano,
        clarinet and saxophone. I've dabbled a bit in the past with video production too (making
        YouTube videos and I also used to do video editing for a charity on a volunteer basis), but
        like I said, I suck at writing so I let that take a back burner.
      </p>
      <p>
        All the stuff I've put on the back burner, I'd love to come back and get back into them at
        some point, if only we had more than 24 hours a day - I'd love to sit down and learn the
        skills I need to improve in these things!
      </p>

      <p>I also just love learning about random stuff too.</p>
      <br />
      <hr />
      <h2>Early Days</h2>
      <img
        class="shadow-xl/50 block mx-auto md:float-left md:mr-6 mb-4 md:mb-0 w-64 md:w-72 rounded-2xl"
        src="../assets/img/2010.jpg"
      />
      <p>
        At the risk of sounding like a cliche, I have had a passion for computers since before I can
        remember. Some of my earliest memories include being able to type on my Granddad's Windows
        98 PC before being able to properly read and write, playing Need for Speed on the Xbox, and
        messing about with Flight Simulators with my dad on his Windows XP laptop (see picture). I
        was always fascinated (and slightly terrified) by how computers worked, my favorite pieces
        of tech in the 2000s were the translucent plastic ones - I had a limited edition crystal
        Xbox, I was obsessed with the controller for it as you could see all the and magazines about
        computers and technology. I got my first PC in 2010, a little Eee PC. I was probably
        addicted a little bit, and thankfully my mother made sure I didn't spend every waking moment
        on the computer, but its safe to say that pretty much from day one I've had a fascination
        with computing. Don't know why really, I suppose everyone had their passion.
      </p>
      <h2>School Awards, Accomplishments and Interests</h2>
      <p>
        2014. The year before I started my GCSEs, my school held a website building competition that
        the whole school year took part in. I lead my team, helping them to come up with ideas and
        guiding them in HTML, CSS and JS programming. The competition was judged by teachers as well
        as representatives from local technology companies. Under my leadership, I was able to get
        us to first place.
      </p>

      <img
        class="shadow-xl/50 block mx-auto md:float-right md:ml-6 mb-4 md:mb-0 h-64 md:h-72 rounded-2xl"
        src="../assets/img/codecamp.jpg"
      />
      <p>
        2017. I attended an event ran by Kainos called Code Camp. This is one of the bigger evens
        that happen in Belfast usually with close to and often over 100 attendants. The first week
        involved learning more about website design and engineering (with other lectures involved to
        learn more about the software world), and the second week involved a competition to create a
        website. This was a solo effort. After a lot of work-shopping and prototyping, I manged to
        create something that managed to get me to third place (see picture). The code for this
        website was
        <a class="underline" href="https://github.com/the-wright-jamie/Kainos-CodeCamp-2018"
          >uploaded to and archived on my GitHub profile</a
        >.
      </p>

      <img
        class="shadow-xl/50 block mx-auto md:float-left md:mr-6 mb-4 md:mb-0 w-64 md:w-72 rounded-2xl"
        src="../assets/img/sound.jpg"
      />
      <p>
        I was also involve in various other extra curricular activities - I was a senior member of
        the sound and lighting team (see picture). As part of this, I lead teams to deliver
        behind-the-scenes services to various events that happened in the school, from regular
        events like assemblies to one-offs like award nights, discos and public drama performances.
        I was also responsible for training and introducing new team members, getting them ready to
        help serve the school in their own way.
      </p>
      <p>
        I played the piano and clarinet, and I was also a member of the school choir and orchestra,
        working my way from lower desks all the way to first desk. I was also a member of the local
        wind band, we played at various concerts and competitions and we won awards!
      </p>

      <img
        class="shadow-xl/50 block mx-auto md:float-right md:ml-6 mb-4 md:mb-0 h-64 rounded-2xl"
        src="../assets/img/dofe.jpg"
      />
      <p>
        I took part in the Duke of Edinburgh Award scheme, achieving my Gold Award in 2018. I
        achieved all three levels, Bronze, Silver and Gold. Working together with my expedition team
        to navigate our surroundings was a fairly formative experience, teaching me that as long as
        I put my mind to something and get on with it you can accomplish pretty much anything.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
