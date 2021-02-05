import {builder} from "kuromoji";

const tokenizerBuilder = builder({
  dicPath: 'node_modules/kuromoji/dict',
})

function tokenize(text: string) {
  tokenizerBuilder.build((err, tokenizer) => {
    if (err) {
      console.log(err);
      return;
    }
  
    const tokens = tokenizer.tokenize(text);
    console.log(tokens)
  })
}

tokenize('水を飲みます');
