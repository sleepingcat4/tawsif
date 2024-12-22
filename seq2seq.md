## A study of Seq2Seq deep learning model (Artitecture-wise)

![image](https://github.com/sleeping4cat/sleeping-thoughts/assets/112309211/585daa70-da3b-4aaf-a7bb-0170fae96946)

### Introduction

Seq2Seq model is often considered a foundational architecture that radically changed Machine Translation(MT). It came around 2014 from Illya (co-founder OpenAI) while he was still working at Google. It was a groundbreaking innovation that shifted focus from Statistical Machine Translation(SMT) to Neural Machine Translation(NMT).

Purpose of this article: describe the core architect of Seq2Seq, a beginner friendly introduction yet enjoyable by experts and mind-blowing realisation how simple models change the world.

Let’s begin!

### Architecture


Illya describes in his paper, Recurrent Neural Network previously shown promising results in taking a sequence and translating it into another target sequence. Whilst it is possible to use it, rather Long short-term memory (LSTM) models are capable enough to translate between long sequences into target sequences.

Stretching further, the temporal dependencies and memory nature of long sequences (can be DNA as well) in our case words, are not rightly suitable for Recurrent Neural Networks (RNN) (hard not impossible) but LSTM can handle them with ease. Because it can maintain long temporal dependencies.

I will personally stretch on temporal dependencies. It means grammatical, linguistic and other relationships between words in a sentence. Linguistically it is a big jargon. We won’t touch that since our focus is Deep Learning, haha!

Temporal dependencies could be known as Dependency parsing by some folks as well. Anyways, that was the core reason Illya took upon the task to leverage LSTM models.

Leveraging LSTM, Illya and his team made an encoder-decoder style model. Where encoder LSTM are used to convert words in a sentence into “context vector” and decoder LSTM are used to take that vector and convert back into texts but in target sequence. (From English-French).

Getting technical
What happens: LSTM model estimates conditional probability from a source sequence to a target sequence whilst the corresponding sequence size T might differ from each sequence pair.

To obtain the target sequence the final hidden state from the encoder (dimensional representation v) and then that used to predict the target sequence.

In Ilay’s case, he used LSTM-LM formulation to calculate the final hidden state (encoder part) and to find the source sequence distribution leveraged LSTM formulation from Graves. (decoder part)

### What’s the unique aspect?


Special character: IIya introduced “special character” for his paper, “<EOS>”. Layman terms, it allows the model to understand the end of a sequence whilst being independent of any predefined size. A very novel solution.

We’re almost near to an end. What’s remaining?

### BLEU metric


It’s an evaluation metric to understand how accurately certain MT methods were able to perform translation from source to target language. We won’t discuss BLEU metic in this iteration but Statistical Machine Learning (SMT) achieved 33.3 whilst Seq2Seq achieved 34.8, quite remarkable.

Now, if you’re a contender who believes, SMT is crap, hold your breath, SMT is equally good.

### Anything missed?


Yes, we missed discussing IIya’s magic. He had reversed the word in source sentences (target sentences were left unchanged) in one instance and achieved almost a 6 points increase in decoded translations. WOW!

Phenomenon discovered as “minimal time lag”, reversing source sentences did not change the average distance between two sentence pairs’ words. But the first few words of the source sentences are very close to the first few words of target sentences. Resulting an improved BLEU metric.


> ### Comments
 I personally enjoyed reading the paper and refresh my memory. I have come across naive approaches in explaining the Seq2Seq model before on Medium, YouTube, and  LinkedIn because they all were plagued with explaining the model from some other YouTuber’s perspective/Keras library/Github code. Not the original approach.

 A reading and understanding from the source can make all the difference in learning in AI. I hope from this article people take away a deeper understanding of this foundational deep learning model that eventually gave birth to Transformers.

#### Code
**I found this wonderful repository:** https://github.com/farizrahman4u/seq2seq

**Original Paper:** https://paperswithcode.com/method/seq2seq
