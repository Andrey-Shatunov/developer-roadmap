import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  beforeTitle?: React.ReactNode;
};

export function PageHeader(props: PageHeaderProps) {
  const { title, subtitle, children, beforeTitle = null } = props;

  return (
    <Box>
    </Box>
  );
}
