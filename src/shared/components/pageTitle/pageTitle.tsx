import { Container, Title } from './page.styled';
import type { PageTitleProps } from './pageTitle.types';

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Container>
      <Title variant="h1">
        {title}
      </Title>
    </Container>
  );
};
