import React from 'react';
import {Link} from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateSections(path) {
  const s = path.split('/');
  const subpaths = s.slice(1);
  let sections = [
    {
      key: 'Home',
      content: 'Home',
      link: true,
      active: false,
      hasDivider: true,
      linkTo: '/'
    },
  ];

  subpaths.map((subpath, index) => {
    if (subpaths.length !== index + 1)
      return sections.push({
        key: capitalize(subpath),
        content: capitalize(subpath),
        link: true,
        linkTo: '/' + subpath,
        active: false,
        hasDivider: true,
      });
    else
      return sections.push({
        key: capitalize(subpath),
        content: capitalize(subpath),
        link: false,
        active: true,
        hasDivider: false,
      });
  });
  return sections;
}

export default function MyBreadcrumbs(props) {
  const sections = generateSections(props.path);

  return (
    <Breadcrumb icon="right angle">
      {sections.map(section => (
        <>
          <Breadcrumb.Section
            key={section.key}
            link={section.link}
            active={section.active}
          >
            {section.link && 
              <Link to={section.linkTo} >{section.content}</Link>}
              {!section.link && section.content}
          </Breadcrumb.Section>
          {section.hasDivider && <Breadcrumb.Divider />}
        </>
      ))}
    </Breadcrumb>
  );
}
