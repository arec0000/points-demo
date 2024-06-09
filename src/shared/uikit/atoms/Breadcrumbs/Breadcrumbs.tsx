import { useState } from 'react';

import { Text } from '../Text';

import classes from './Breadcrumbs.module.scss';

interface IBreadcrumb {
  text: string;
  onClick?: () => void;
}

interface IProps {
  breadcrumbs: IBreadcrumb[];
}

export function Breadcrumbs(props: IProps) {
  const { breadcrumbs } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(
    breadcrumbs.length - 1,
  );

  const handleBreadcrumbClick = (index: number) => {
    setActiveIndex(index);
    breadcrumbs[index].onClick?.();
  };

  return (
    <div className={classes.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.text} className={classes.breadcrumbs}>
          {index > 0 && index < breadcrumbs.length && (
            <Text
              variant="h4"
              color={index === activeIndex ? 'black' : 'gray30'}
            >
              &nbsp; / &nbsp;
            </Text>
          )}
          <button
            className={classes.breadcrumbs__button}
            onClick={() => handleBreadcrumbClick(index)}
          >
            <Text
              variant="h4"
              color={index === activeIndex ? 'black' : 'gray30'}
            >
              {breadcrumb.text}
            </Text>
          </button>
        </div>
      ))}
    </div>
  );
}
