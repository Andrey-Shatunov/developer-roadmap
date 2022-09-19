import siteConfig from '../../content/site.json';
import { isInteractiveRoadmap, RoadmapType } from '../../lib/roadmap';
import { NewAlertBanner } from './new-alert-banner';
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { AtSignIcon, ChatIcon, DownloadIcon } from '@chakra-ui/icons';
import React from 'react';
import { SIGNUP_EMAIL_INPUT_NAME, SIGNUP_FORM_ACTION } from '../../pages/signup';
import { event } from '../../lib/gtag';

type RoadmapPageHeaderType = {
  roadmap: RoadmapType;
};

function RoadmapDownloader({ roadmapTitle }: { roadmapTitle: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={(e) => {
          event({
            category: 'Subscription',
            action: `Clicked Download ${roadmapTitle} Roadmap`,
            label: `Download ${roadmapTitle} Roadmap Button`
          });
          onOpen();
        }}
        size='xs'
        py='14px'
        px='10px'
        leftIcon={<DownloadIcon />}
        display={['none', 'flex']}
        colorScheme='yellow'
        variant='solid'
        _hover={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        Download
      </Button>

      <Modal initialFocusRef={initialRef} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Heading mb='5px' fontSize='2xl'>Download Roadmap</Heading>
            <Text fontSize={'md'} color='gray.700'>Enter your email below to receive the download link.</Text>
            <form action={SIGNUP_FORM_ACTION} method='post' target='_blank' onSubmit={() => {
              event({
                category: 'Subscription',
                action: `Submitted Download ${roadmapTitle} Roadmap Email`,
                label: `PDF / Subscribe ${roadmapTitle} Roadmap`
              });

              onClose();
            }}>
              <Input required ref={initialRef} size='md' my='10px' type='email' placeholder='Email address' name={SIGNUP_EMAIL_INPUT_NAME}  />
              <Button type='submit' colorScheme='green' size='md' width={'full'}>Send Link</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function RoadmapSubscriber({ roadmapTitle }: { roadmapTitle: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={(e) => {
          event({
            category: 'Subscription',
            action: `Clicked Subscribe ${roadmapTitle} Roadmap`,
            label: `Subscribe ${roadmapTitle} Roadmap Button`
          });
          onOpen();
        }}
        size='xs'
        py='14px'
        px='10px'
        leftIcon={<AtSignIcon />}
        display={'flex'}
        colorScheme='yellow'
        variant='solid'
        _hover={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        Subscribe
      </Button>

      <Modal initialFocusRef={initialRef} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Heading mb='5px' fontSize='2xl'>Subscribe</Heading>
            <Text fontSize={'md'} color='gray.700'>Enter your below to receive updates to this roadmap.</Text>
            <form action={SIGNUP_FORM_ACTION} method='post' target='_blank' onSubmit={() => {
              event({
                category: 'Subscription',
                action: `Submitted Subscribe ${roadmapTitle} Roadmap Email`,
                label: `Email / Subscribe ${roadmapTitle} Roadmap`
              });

              onClose();
            }}>
              <Input required ref={initialRef} size='md' my='10px' type='email' placeholder='Email address' name={SIGNUP_EMAIL_INPUT_NAME}  />
              <Button type='submit' colorScheme='green' size='md' width={'full'}>Subscribe</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export function RoadmapPageHeader(props: RoadmapPageHeaderType) {
  const { roadmap } = props;

  return (
    <Box
      pt={['25px', '20px', '45px']}
      pb={['20px', '15px', '30px']}
      borderBottomWidth={1}
      mb='30px'
    >
    </Box>
  );
}
