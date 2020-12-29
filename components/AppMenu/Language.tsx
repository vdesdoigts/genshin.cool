import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import {
  Flex,
  Icon,
  Select,
} from '@chakra-ui/react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdLanguage } from 'react-icons/md'
import { ILangs } from '../../types'

const Language = () => {
  const router = useRouter()
  const { i18n, t } = useTranslation()

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(router.asPath, router.asPath, { locale: e.target.value as ILangs })
    i18n.changeLanguage(e.target.value as ILangs)
  }

  return (
    <Flex
      position="relative"
      alignItems="center"
      height="56px"
      borderRadius="12px"
      background="rgba(0, 0, 0, .05)"
      transition="all .25s"
      _hover={{
        background: '#3F8CFF',
        color: '#fff',
      }}
    >
      <Flex position="absolute" top={0} left="24px" height="100%" align="center">
        <Icon as={MdLanguage} w={7} h={7} opacity={.8} _hover={{ color: 'currentcolor' }} mr="20px" />
      </Flex>
      <Select
        variant="unstyled"
        cursor="pointer"
        color="inherit"
        transition="none"
        rootProps={{
          pl: '76px',
          pr: '20px',
          background: 'transparent',
        }}
        iconSize="0"
        onChange={onChangeLanguage}
        defaultValue={router.locale}
        css={{ fontFamily: '-apple-system,system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}
      >
        <option value="en">{t('langs.english')}</option>
        <option value="fr">{t('langs.french')}</option>
      </Select>
      <Flex
        position="absolute"
        top={0}
        right="20px"
        direction="column"
        flexShrink={0}
        justifyContent="center"
        alignItems="center"
        width="24px"
        height="100%"
        fontSize={0}
        pointerEvents="none"
      >
        <Icon as={MdKeyboardArrowUp} w={5} h={5} />
        <Icon as={MdKeyboardArrowDown} w={5} h={5} mt="-8px" />
      </Flex>
    </Flex>
  )
}

export default Language
