import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Donify",
    description:
      "A smart donating platform that connects donors and acceptors seamlessly. Built with a full-stack approach to enable real-time donation tracking and management.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop",
    technologies: ["MongoDB", "Node.js", "JavaScript", "React", "Html", "css"],
    github: "https://github.com/Dhanamalini-S-git",
    live: "https://donify-jet.vercel.app/login",
  },
  {
    title: "Dhanam's AI ChatBot",
    description:
      "An intelligent AI-powered chatbot that provides interactive and automated conversational experiences, built with modern web technologies.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwQFAgYHAQj/xAA8EAACAQMCAwQIBAQFBQAAAAABAgMABBEFEgYhMRNBUWEUIjJCcYGRoQdSscEjM2LRJHLC4fAVFkNEgv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAyEQACAQIEBAQEBgMBAAAAAAAAAQIDEQQSITETIkFRMmFxkRSBsdEFI6HB4fBCUmIz/9oADAMBAAIRAxEAPwCvR69kzhD0bzqIySj1FoY9G86iMkI1IkORqiA9GpErjkakMYpqIGdABQAUAFABQAUAFABQAUAFAHP43rcZbkhHqLJD43pDJCPUWhkhHqI7j0akSHq9RsFyda2d3cYMFvI48QvL61VOrTh4mWRhKWyLOHQdRfmY0T/M4/asrxtFFqoVGSU4cu++aEfM/wBqrePp9mS+HkYyaBfLu2COTHXD4/WpLHUnvoJ0JlfcWs9q224idCemRyNaYVYT8LKpQcd0KqwiFABQAUAFABQAUAc4R66FjIPR/OojJCN51GxIkI9JoY9HqDQyz0uzn1CfsoB05sx6KPE1TWrRoxzSLKcHN2RuumaLZWYBZBNKPfkH6DoK4lbGVKumyOhToRh5lzGTkhR6vUDwrI+5dYj3WqWFmN11fW0Q/rlAq2NCrLwxZXKrCO7Kx+NeGY2w+tWxP9BLfoKl8NVW6/VEePB7a/JnsXG/DTOQupqScdFb+1Hw9Ty90Pirs/Z/YtbLVNJ1mN0s7u3ul99A2SPiO6oOnUp8zVhqcJ6XKHWtKNlKrQ5MEhwM+6fCulhsTxFaW6M1WllehVujRuyOMMpwRWyMlJXRS1Z2PKkIKACgAoAKAOYo1dIyD0aosCQj1EkSEeosZMiika2a4AHZI4RjnoTnu+VVucc+TruSSdro6FodqNN01Bgds/Mnxbv+nSvPYqrxajfTodOjDKlE0bjT8Ujpd3Jp2hRxy3ER2yzvzVD4Ad5qUKEY6z1fbt6/YTnKXg0X19Dm2pcW8QaoS17qtwQ3uI21R8hWhTcfDp6f2/6lThF76+v9sVDAyNukZnbxdix+ppO8t9SSSj4dD0KF6cqaVguT9NttSdvSdNguGaE/zIlJ2n408lyuVWMHqzoui3Z1ewjvA3o+owEr20Yw0cg/bvx8qzu9KTNFo1YanUtKvjxBwkl3KgEzxsJFHdIhIOPmKpsqNZW2/Zjvnpu++v6FFqDrJeyunRiCPmBXVoLLTUWYnUjN3RHq8QUAFABQAUAcsRq6ZjHK1JoY9G86gMkI1IZdaQwNvIknKN5FK5HJygLFfmP1rFiE+IpLs/1LYTjGLTN4vLrttMS4gPW2MinzK5riRp2qqnPvqdHNyOS7HzE53XUjB9xY5LHlzPM/T9q0Rbk25dWFkopI6XacKaVb3UemXFhJcuU2z3kZb1GI6gAlQOnWtfDioZjivGVJcydkaNqVqLHU7u0BJEE7xgnqQrEZ+1Us6UJZoqXcjUiTZ1XhPTby44asru1uooYUhcGIITvYE5Jzy3cutXRqQXK0cjENKq7lVYanaabrF1HcyiGOdEcFhgbuec48v0qvGU23dHTwU/y+Y6r+Gc6yaPewowZYb6TBByCGw/8Aqrn4iNlF+X7s2QfNL+9CturpXnjtguGjjPP/ACsU/wBNdelTtHP3+1/3ORConUyLp92jCrTQFABQAUAFAHJlauoYRytSGORqi0SJCPURl9YMyWWlzg+qmpIrjuw2VP2NY5/+k1/z9BzXKmbXoKb9EtYHOSsZgY+akqf0rlY1ZcS2vU6OG5qCXkfOd5E1vqN1BIMMsrA/WpvSpK3f+SyDvTi/I6Xon4k2tlbSm5tLmS4kO7Ee3bkDHtZB+1WTcZWscqWBk5aPQ1aHTtY4rvrzULKz7Zml3S7GVQpbu5kUtOrNMpwoxUZMtrX8N9fmI7VLeAd/aSg4+maLx7lLxlPoVVrrmp6BNc2Wm6i3YrIy5TmrYOMgHxqWnUtlShUV5Iq5pZruaSaQmSRjuY46/Sp3LIxsrI7b+AnaHhu/d87DdYUnyUD+1Ycdbl+f1L6Hil8ixvY1W8lPvCSUY8jIx/et9FtwS8l9EY3TSqOXqKq4kFABQAUAFAHIVauqYRytSAdGcnA64zVcqkYtKT3JpNq6GQTJIuVbmCQynqDmqKWIVWUo2s0WVKTgk+5dabeJ6DPZSsEZ5EliZjgBlPPn3chTnHnU15p+hBrNHKzf9IiKWspIG03UzIQcgguSCPrXBxck5q3ZfQ6eFi1T18zjfH+gnTOIrud4ysF3IJIpAOXMcxn45qzxJVF8xxduQ1sWXPIlPzFJTG0WWjahfaHdC5067aJ8YYe6w8CO+pZlazKqlKNRWkXupcb65qtq9qZ44UcYf0VCjN5ZyTTS/wBVczxwlKm7sprPQL27P+F067mz+WM4Pz6U7T66eun1L88O/tr9DZ9H/C7Wr6VGnU6dEfaeRvWx5LUZVoRXM7+S1JpSfhXudl0iyseGNCS1teUEC5Jbq7HqT5k1hk5V6heoqnHU1dpDJI8je07Fj8TXcjHKrLoYW76mQNMR7QAUAFABQBx4GusYBitSGMKl1zGXE8frDZjp3/2xXHxs883SkrNaxZvw6yxzrXuKiulN0wtl3RM38RyMcxWSOIcasanXZl7pcjh7Fna7Xt5LpLhWV37HsveBUnn1+PUeFaqNX4jFZ47JGecOFRs92bhwdxBDaRHTr9wkBbMUp9mMnqD4Dz7qMfhJT/Mp79R4auo8stjcLuztL2Hs723jngboGXcPka5EZypvl0ZucIzWupV/9m8Lbt502DPhk4+mas+Iqdl7IhwI33fu/uOi0Hhe2PqaZYg+JjGaOPW6P9B8Kn1+pI9N0DTxnZYQbe/YgP1pOdaW8n7gqdJbRXsOj4j06UAwzhlIyrA+qR5GhYepLWw+LBHsnENmnR3kP5UX9zirI4Kq99CDxEFsU9/qs1+wDAJEDkRg/c+Nb6OGjR21ZmnVc/QQrcqvIDVNIZmDmkB7QAUAFAHHK6xgMlNADldtjRhiquMEju86y4rDRrwt1WxdRqunK/Qx7MQxhcbUUcvh415xxcJOMtzqqWZXRvH4V6O2qy3l5NBu0wwvC6yLgXL8iuG/p58x0Jqt1ZRknB2aJqCatIXxbwxPw9dbk3S2Eh/hTdSv9LefX413sHjI4iOuklv9zmV6DpPyIek3mpLOltp1xcK8jbVijcgE/DpV1aFKzlUS0IU5TTtFmwzabqrQHtr8zzd8EQx9WIArkyxOHT5Ye5uVKrbmkazqPBfF+txCLZBaoH3BhNzIx0POqqtWnUWVyS9EThGcHdK/zMLP8FdWlP8AjdUgGevViKpjKjBNZ2/kv3ZPNVf+KXzN20P8NriwEKvrc0scKhBHsUoQPv8AfFWrGqPhv7/wQdGUnd2/vzNmueF7IWbiPKzqnqspxuI8R31CGOqqer0HKhC2hrFnp1xd6YmoWrRT27jKmOTJYeI8flXQWLpOWVMzOjJK7EI/StJWORqQxqmkMzBzSA9oAKAOOV1jAFAGamgDZeF7rRLmaGz4msoJ41OIJ5Ryjyc7X54K58enw6cf8RwLqfm09+pvwuJycstjslp2dtCkVuiJCowiIAFUdwAHKuAzpmOvSacuiznV2iFodqsZeagkgDPzwfLGe6nTnKEs0dxSipKzOYfiZby8KWcGo6IsMU25oWIj9kMpGQOmRz+tavi6zpuLdyn4empJ2sbZosz3emWF23WaFWbl4rn9apdmWLTQvrflVJYV1jxTBccSPpHo7Kqs8S3Bb1XkUAlf1+lbp4CUcOq199bdUn1MscUpVeGkTrbV524sn0d44xElqJ0cZ3k5AIPPHf4VGWGisKq6et7DVZuvwn2uX6+2DWJmg0ngS1eLQYrK7V4TbXM6xqBt9TtW29PLGKvu4rYplBTadyNr8UEepTPZOrwk5O3mFbvH1z8DyrqYOrnp5XujNXp5ZEJGrWUjlakMYpqIzMGgD2gDjldYwBQAUAZqaLAblwjxrPpAWzvw9xZe6RzeL4eI8vp4Vy8Z+HRrc9PSX1NtDFuHLLVFrrnEOia5OY73UpW05QpFt6I2SwIJYNjr3d3Imuevw3EKNsuvqaXi6V73Iev6nZ8b6jZ6Y0MqWrM+GZtrbyh2kYPLBqyX4fwqEpTev8kFis9RKJu2mWQsbC2tF9mGNUGfADFcuTV9DatNye06WttLcSEBIkZ2J8AM0oQc5KK6jlLLFs55ENRbh2O9h0yZZIbxtR9OLrtJJ58uuOQ+lelfBWIdKU1qstjjc7pZ1F6O9zarS9ju+OdL1CD+XfaYfkRkkH4EAVz505QwNSnLeMjVCSliozW0om61xmdA5XfRanqUt7pul372ZlmbdIp9ldxzjHPn5Eda7WIhHgqfXQw0pS4jS2Nu4T4Q0vS9NjtC093t3evcPnmRg4AwAP8AnWuVxpxfK7Gx04S3RT67p50vUWhGeyf1oifDw+VdrDVuNTv16mCrDJKxDRqvK0OVqiMaDSGZA0AcdrrGAKACgD0UAZA0ANRqi0Ml2F2bK8gulyTDIsmB34OahUgpwce5OMsrTO3na+HQgowBUjvHdXjmraM7t76hJBFdW8lvcJvhkXa6k8mHhRGcoSUouzQOKkrMl28EMVqtrHEot1TYIsert8MeFEqkpSzt673BQSWW2hJghiiCLHGibRhQqgY+FJzlLdgopbIkE4XnUd2SOVaNe41hJc+pM5B/+un3xXo8RSzUMpyqU7VLm/pqlpYQNcahcRW0QOA8rgA1wHByaS3OmpJK7K/iLUNM1m0YWV1G15ajtezOVcp0bkcZHQ1rwanRq2mrJmes4VIXi72NWR67DMY9GpANVqRIapqIHH66xgCgAoAKAPc0AZqaAGK3jUbDOocHcR2l1pcFncylLq3j2tvU4Kjo27p0x17687j8JKE3US5WdXC4iMoqLepZNxfw5FuU69p4cHB/jjlXPy2epr3Wh4eNeFhyGtwSn8sbs/2FWQpTqeFCbS3A8daIqn0S11S9P5bTT5G+5AFTnhasEnL6ohxYdzzVOL7mTR2eCwktHdjEVumXtVBHJtqk47+pGKtwuDU6izlFTEq1oamkxtgDBxiu6zCmN4gew4gtGJab/rkDR9mWz2KLn1sDpuIPP4+VcOWHmsS1S6anQVSLo8/Us9PXXW0S3vb+2tzFIjI0kL+vFg4G7PXPLpV9PEKpVySjZ3Mzw3DWeLujxGroMgPRqiA5GpNEhymkByOuoYQoAKACgAoA9BoAzVqQyz0PUW0687UO6K6lHZCQQPH7VTXpcWNicJZXqXct5eLJj06VlIyrYU5HxxVMKNKSvkRXUvF2uxkd5eL/AO9cD4Pj9KsVKiv8EVuMn1ZJhkmuSI5JppM9d8hP70pZIapWCOHzvXUh6ndRFltrUARRElmX328fl/eowUm88uprSjFZY7EeN6nYDLbs7WWFFMzL3nGSOlUumotzitWTUr2i9h+lPc28MsbSyKsv8xA3queuT4nNYaGGkqnEmjRUqrLliTkatxQSEaojHI1IY9GpWGcorpmEKACgAoAKACgD0GgDNTQMm2140cYicb4u4d6/Cq3DW63He6syytry3HJ5SAPzIc/aq5Z+iCMYrqZz6pmMxWoKK3tP7zDw8hUVTb1kWZklZEVG6VZYiSEeokrj0ek0MkxvUbDHo9RaGmSEaoskPRqixj0ekBy6ukYwoAKACgAoACcUm7DQh5yvuVTOs49CxU0xRvXHRKolipdixUV3D0+TwqDxU+w+DEzGoy+VR+Kl2HwYjF1KX8oo+Jn2DgxHx6pJ3pR8TLsPhIm2+oM//iNWRrt9CLppdSygm3D2SKtTuQ2JaNTYEiNqiMkI9QYyQj1EkPRqVhnNK6JjMtrbd2DtBwW7qV1exLK7XMaZEPnQB7igDygAwPAUmh3PCinqopZI9gzM8EafkFJ04dh55Gaxx/kFR4UOw88hqxx/kFLhQ7DzyHxpGOiD6U+HHsGZkhMDoB9KWVdAuSI2pWGmSEekO5IjaojJCPSGSEbzqDQyQj0iRzo5wcdcVvMqOuJf6OdBDiWD0AxbQhxzGMbdp7+7/bBbyHCxHxFrPNc7qnSdPyOfWUsK28Aa8tAMnMc0LMYxuPPrg9c/SvRTjJyfK/kzmxlFLRocZ4dqIbjS1YqMsICcZA8O8Z+1RyS/1l7knJd0QNWmSSOEJJbOeZPYR7MdOv8Azuq+hFpttNepRWadtStrQUBQAUAFAHoNADFakMajUmMejUhjkaosY9GqIyQj0mhj0eo2GSUeo2GSI2qNhmg1uMx6MZ6Cl1GjymIKACgAoAKACgAoAKAMlNADFNJjHIaiMchoGhyGoMY9CaRJEmMmogPQmokiRGTSYz//2Q==",
    technologies: ["Python", "Gemini-AI", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Dhanamalini-S-git/Dhanam-s-Bot.git",
    live: "https://dhanam-s-bot.onrender.com/",
  },
  {
    title: "Odiss",
    description:
      "A modern web application for travel and trips management, providing a seamless user experience for exploring and booking travel services.",
    image: "/odiss.png",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/arunraja-web/odiss.git",
    live: "https://www.odisstrips.com",
  },
  {
    title: "Smart Parking Management",
    description:
      "One app to find, book, track, and auto-pay parking across every mall, festival, and venue — no venue-specific app needed.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepUVLPdD47fD_vVYO0w4PeJVG4R9T5Lwj_w&s",
    technologies: ["MongoDB", "Node.js", "JavaScript", "React", "Html", "css"],
    github: "https://github.com/Dhanamalini-S-git",
    live: "https://parkingprofrontend.vercel.app/",
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-background rounded-full text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
