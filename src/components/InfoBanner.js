import { Z_INDEX } from 'constants/zIndex';
import { Box, GridItem, GridWrapper, Paragraph } from 'theme/components';

export const InfoBanner = () => {
  // TODO: put this banner data to the custom data of shopify
  const bannerData = [
    'Versandkostenfrei ab 75 €',
    'Schnelle Lieferung durch DHL und GLS',
    '100% Hergestellt in Deutschland'
  ];

  return (
    <Box // TODO: should use to get the same padding as other section Grid wrapper
      id="info-banner"
      sx={{
        width: '100%',
        overflow: 'hidden',
        bg: 'surfaces.uspBanner',
        zIndex: Z_INDEX.BANNER,
        position: 'relative'
      }}>
      <GridWrapper sx={{ display: ['flex', 'grid', 'grid', 'grid'] }}>
        <GridItem
          sx={{
            padding: '1rem 0 0.9rem 0',
            textAlign: 'center',
            gridColumn: ['3/25', '1/25', '4/22', '5/21'],
            display: 'flex',
            justifyContent: [
              'center',
              'space-between',
              'space-between',
              'space-between'
            ],
            width: '100%'
          }}>
          {bannerData.map((info, index) => (
            <Paragraph
              key={info}
              sx={{
                variant: 'text.body.bold',
                color: 'texts.primary',
                fontSize: ['1.2rem', '1.2rem', '1.3rem', '1.3rem'],
                display: 'inline-block',
                whitespace: 'nowrap',
                ':nth-child(odd)': {
                  display: [
                    'none',
                    'inline-block',
                    'inline-block',
                    'inline-block'
                  ]
                }
              }}>
              {info}
            </Paragraph>
          ))}
        </GridItem>
      </GridWrapper>
    </Box>
  );
};
