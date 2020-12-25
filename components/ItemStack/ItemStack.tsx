import React from 'react'
import { AspectRatio, Box, HStack, Flex, Text, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

interface IProps {
  items: any
  title: string
  itemsTranslationPrefix?: string
  showFullText: boolean
}

const Item = ({ item, itemsTranslationPrefix, showFullText }: Pick<IProps, 'itemsTranslationPrefix' | 'showFullText'> & { item: any }) => {
  const { t } = useTranslation()

  return (
    <Box pb="8px">
      <Tooltip
        label={itemsTranslationPrefix ? t(`${itemsTranslationPrefix}.${item.name}`) : item.name }
        placement="bottom-start"
        openDelay={100}
        borderRadius="8px"
        bg="rgba(0, 0, 0, .8)"
        px={4}
        py={2}
        offset={[0, 2]}
        color="#fff"
        isDisabled={showFullText}
      >
        <HStack
          key={item.name}
          overflow="hidden"
          borderRadius="8px"
          background="#f2f4f8"
        >
          <AspectRatio
            ratio={1}
            flex="0 0 36px"
            width="36px"
            height="36px"
          >
            <Box position="relative" width="100%" height="100%">
              <Image
                src={item.images.image}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </AspectRatio>
          {showFullText && <Text
            mb="1px"
            pr="12px"
            pl="8px"
            fontSize="14px"
            lineHeight="1.1875"
            fontWeight="500"
          >
            {itemsTranslationPrefix ? t(`${itemsTranslationPrefix}.${item.name}`) : item.name }
          </Text>}
        </HStack>
      </Tooltip>
    </Box>
  )
}

const ItemStack = ({ items, title, ...rest }: IProps) => {
  return (
    <HStack flex="1 1 auto" align="flex-start" spacing="8px" mb="-8px">
      {!!title && <Box><Flex
        align="center"
        justify="center"
        flex="0 0 36px"
        alignSelf="stretch"
        width="36px"
        minH="36px"
        borderRadius=".5rem"
        background="#E7FAFF"
      >
        <Text
          fontSize="13px"
          fontWeight="600"
          lineHeight="1.38462"
        >
          {title}
        </Text>
      </Flex></Box>}
      <Box><HStack flexWrap="wrap" spacing="4px">
        {items.map((item, index) => (
          <Item
            key={`${item.name}${index}`}
            item={item}
            {...rest}
          />
        ))}
      </HStack></Box>
    </HStack>
  )
}

export default ItemStack
