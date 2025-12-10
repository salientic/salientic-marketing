import { Card, CardContent } from "~/components/molecules/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/molecules/avatar";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string;
  imagePosition?: string;
  social: {
    linkedin?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Abhishek Agarwala",
    role: "Founder & CEO",
    description:
      "Leading the vision to revolutionize automotive dealerships with AI-powered solutions.",
    initials: "AA",
    image: "/assets/profile-pics/abhishek.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/abhishek-agarwala",
    },
  },
  {
    name: "Akshay Mahale",
    role: "Founding Sales Head",
    description:
      "Driving strategic growth and partnerships across USA markets.",
    initials: "AM",
    image: "/assets/profile-pics/akshay.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/akshay-mahale-71657362",
    },
  },
  {
    name: "Satya Prasad",
    role: "Founding Product Manager",
    description:
      "Part of the founding team, shaping product strategy and driving customer-centric innovation.",
    initials: "SP",
    image: "/assets/profile-pics/sathya.jpeg",
    imagePosition: "center 20%",
    social: {
      linkedin: "https://www.linkedin.com/in/satya-prasad-pamula-4583a456",
    },
  },
  {
    name: "John Diptikanta",
    role: "Founding Engineer",
    description:
      "Part of the founding team, architecting intelligent automation and platform solutions.",
    initials: "JD",
    image: "/assets/profile-pics/john.jpeg",
    imagePosition: "center 25%",
    social: {
      linkedin: "https://linkedin.com/in/johndpknt",
    },
  },
];

export function TeamSection() {
  return (
    <section
      id='team'
      className='py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50'
    >
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Meet Our Team
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            The founding team building the future of automotive retail
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto'>
          {teamMembers.map((member, index) => {
            const { name, role, description, initials, image, imagePosition, social } = member;
            const isFirstOfLastTwo = teamMembers.length === 5 && index === 3;
            const gridColClass = isFirstOfLastTwo
              ? 'lg:col-span-2 lg:col-start-2'
              : 'lg:col-span-2';

            return (
              <Card
                key={name}
                className={`bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${gridColClass}`}
              >
                <CardContent className='p-8 text-center'>
                  <div className='mb-6 flex justify-center'>
                    <Avatar className='border-4 border-blue-100 h-32 w-32'>
                      {image && (
                        <AvatarImage
                          src={image}
                          alt={name}
                          style={imagePosition ? { objectPosition: imagePosition } : undefined}
                        />
                      )}
                      <AvatarFallback className='text-3xl font-bold bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700'>
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                    {name}
                  </h3>
                  <p className='text-blue-600 font-semibold mb-4 text-lg'>
                    {role}
                  </p>
                  <p className='text-slate-600 leading-relaxed mb-6'>
                    {description}
                  </p>
                  <div className='flex justify-center gap-4'>
                    {social.linkedin && (
                      <a
                        href={social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-slate-400 hover:text-blue-600 transition-colors'
                        aria-label={`${name} LinkedIn profile`}
                      >
                        <Linkedin className='h-5 w-5' />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
