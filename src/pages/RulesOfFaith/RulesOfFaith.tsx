import { Typography, Paper, Container } from '@mui/material'
import { useStyles } from './style' // Certifique-se de importar os estilos corretamente

export const RulesOfFaith = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant='h5' gutterBottom>
          Regra de Fé
        </Typography>
        <Typography variant='body1' paragraph>
          A Igreja reconhece e proclama Jesus Cristo como seu único Salvador e
          Senhor, aceita a Bíblia Sagrada como única regra de fé e prática e
          adota a seguinte Declaração de Fé, que deve ser aceita como condição
          essencial e indispensável por todos os seus membros. Cremos:
        </Typography>
        <Typography variant='body1' paragraph>
          I - Na inspiração divina, verbal, de todos os livros canônicos das
          Sagradas Escrituras;
        </Typography>
        <Typography variant='body1' paragraph>
          II - Na autoridade das Escrituras como única fonte de doutrina e fé
          cristã e base da conduta do povo de Deus;
        </Typography>
        <Typography variant='body1' paragraph>
          III - Num só Deus, existindo eternamente em três pessoas, a saber: o
          Pai, o Filho e o Espírito Santo;
        </Typography>
        <Typography variant='body1' paragraph>
          IV - Na divindade do Nosso Senhor Jesus Cristo, no seu nascimento
          virginal e na sua encarnação e vida sem pecado, nos seus milagres, na
          sua morte vicária e na reconciliação através de seu sangue, na sua
          ressurreição física, na sua ascensão à destra do Pai e na sua segunda
          vinda, pós-tribulacionista e prémilenar, de modo pessoal, literal e
          corporal;
        </Typography>
        <Typography variant='body1' paragraph>
          V - Na personalidade e divindade do Espírito Santo, na sua agência
          ativa na salvação, no batismo no Espírito Santo, sendo o mesmo um
          revestimento de poder para servir a Deus, nos milagres, dons e
          ministérios do Espírito Santo, operantes na igreja atual;
        </Typography>
        <Typography variant='body1' paragraph>
          VI - Na depravação moral do homem e na sua necessidade da obra
          redentora de Jesus Cristo como único meio para a sua salvação;
        </Typography>
        <Typography variant='body1' paragraph>
          VII - No intento e vontade de Deus de salvar a todos os homens, sem
          acepção de pessoas, sem o uso de coerção, somente através da pregação
          do Evangelho, devido à plena provisão da obra redentora de Cristo para
          a salvação de todo aquele que crê;
        </Typography>
        <Typography variant='body1' paragraph>
          VIII - No livre arbítrio do homem e na sua obrigação de arrepender-se
          dos seus pecados e de confiar a Cristo como condição para a sua
          salvação;
        </Typography>
        <Typography variant='body1' paragraph>
          IX - No dever de todos os cristãos de dedicar-se à promoção do Reino
          de Deus, à oração, à leitura da Palavra de Deus e à prática dos
          mandamentos de Cristo;
        </Typography>
        <Typography variant='body1' paragraph>
          X - Na santificação pela fé, não sendo um legalismo exterior, e sim,
          uma disposição de conformidade ao caráter moral de Deus;
        </Typography>
        <Typography variant='body1' paragraph>
          XI - No batismo nas águas por imersão;
        </Typography>
        <Typography variant='body1' paragraph>
          XII - No dízimo como plano financeiro de Deus;
        </Typography>
        <Typography variant='body1' paragraph>
          XIII - Nas ofertas como ato de liberalidade para a obra de Deus;
        </Typography>
        <Typography variant='body1' paragraph>
          XIV - Na união espiritual de todos os que se tornarem coparticipantes
          da natureza de Cristo por meio do novo nascimento e de uma vida de
          obediência a Cristo, sem distinção de cor, denominacional, raça ou
          posição social;
        </Typography>
        <Typography variant='body1' paragraph>
          XV - No culto racional a Deus, que não seja direcionado a extremos,
          como a falta de ordem e de decência ou o ritualismo exagerado;
        </Typography>
        <Typography variant='body1' paragraph>
          XVI - Na santa ceia franqueada a todos os crentes, desde que em
          comunhão com Deus e com sua igreja;
        </Typography>
        <Typography variant='body1' paragraph>
          XVII - Na ressurreição dos justos e dos ímpios, os primeiros para a
          vida eterna e os últimos para a eterna perdição.
        </Typography>

        <Typography variant='body1'>
          Parágrafo único. Para compreensão adequada dessa Declaração de Fé e
          demais referências bíblicas citadas neste Estatuto, e sempre que se
          fizer necessário, adotase a tradução de João Ferreira de Almeida,
          concomitantemente nas versões Corrigida Fiel (ACF) e Revista e
          Atualizada (ARA).
        </Typography>
      </Paper>
    </Container>
  )
}
