import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';
import Image from 'gatsby-image';
import Tag from '../../../shared/Tag';
import Link from '../../../shared/Link';
export interface Props {
  title: string;
  url: string;
  description: string;
  image: any;
  skills: [string];
}

const Project = ({ title, url, description, image, skills }: Props) => (
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <Image
      fluid={image.childImageSharp.fluid}
      alt={title}
      className="mb-8 w-screen h-96 md:mb-0 md:h-64 md:min-w-64 md:w-64"
    />
    <div className="md:ml-8 w-full">
      <h4 className="font-bold mb-2 text-xl md:text-2xl">{title}</h4>
      <div className="mb-4">
        <Link url={url} />
      </div>
      <p className="text-base md:text-lg text-gray-700">{description}</p>
      <div className="flex flex-wrap mt-4">
        {skills.map(skill => (
          <div key={skill} className="my-2 mx-2">
            <Tag>{skill}</Tag>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Project;
