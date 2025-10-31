import { Container, SubTitle, Title } from './page.styled';
import type { PageTitleProps } from './pageTitle.types';

export const PageTitle = ({ title, subTitle }: PageTitleProps) => {
  return (
    <Container>
      <Title variant="h1">
        {title}
      </Title>
      {subTitle && <SubTitle variant="h4">{subTitle}</SubTitle>}
    </Container>
  );
};
