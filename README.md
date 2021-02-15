# Project 2 - Sad and Happy - Let's talk

### Abstract
How to generate alternative fiction endings with gpt-2

### Data preparation

Compiled 5 books of songs of ice and fire, worth 90,000 lines of script. Trained the GPT-2 algorithm on the game of thrones material.
Credit to https://www.kaggle.com/muhammedfathi/game-of-thrones-book-files For providing the individual book materials.


### How the Algorithm works

The GPT-2 model is able to create alternative storylines that make sense in a smaller context, but not necessarily in the larger context. Furthermore, after several testings I realized that the model created associations of certain characters with others. As an example occasionally Hodor comes up when Bran is mentioned, this really fascinated me


### Additions & Optimizations

Maybe the most interesting part of this project is that with the same input text, we are not guaranteed of the exact same output of the alternative storyline. And in fact this is intentionally done in order to keep up the curiosity and engagement with the model.

I do this by 

I trained two models to compete and see what they say


### The API

The website communicates with a running server in colab, to generate and return storylines from the input 


------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Project 1 - Sad and Happy - Let's talk

### Abstract
This artwork enages a conversation between poets through using their poems as conversations. 
The purpose of project is to pair poets whose poems were about "sadness" against those who wrote about "happiness" and observe how their conversations would evolve given certain randomness in which poems picked.

I chose this type of content for my artwork, because It is rare that we get to see how points that likely disagree with one another get to be used in one piece together, this uncertainity of what might be the results of such a collage is what I look forward to explore. 


### The Algorithm

The algorithm used to generate this artwork can be divided into multiple steps



#### Step 1: Scraped Sad and Happy Poems

I used https://www.best-poems.net/ as a resource to scrape top 100 sad and happy poems. These poems are scraped and then stored in a data strcutre as follows

```python3
poem = {
  "author":author,
  "title":poemTitle,
  "body":poemBody,
  "poemType":poemType
}
```



#### Step 2: Creating the Conversation Transcript

Creating a conversation first requires determining a sequence of who is going to talk after who. With this I generate a sequence of "sad" and "happy", and then from the sequnce of "sad" and "happy", I pick a random poem on each turn -  from possibily different poets as well. 

the strucutre of a line conversation is:

```python
poetName: "piece of poem body" 
```

In order to make a realistic conversation, I encorporated random breaks, and ending with words such as "uhmm...", "but i'm not sure..."


### Results:

The final result of my artwork certainly differs with what a person could write because, even though each part of the conversation makes sense independently, the whole conversation with multiple personalities does not guarantee to be cohesive. 

This is why I believe the thoughts it can provoke from a person reading it, is a sense of frustration and confusion dude not only the fact that there two oppositing arguments at hand i.e sadness and happniess but also due to the fact that the personalities discussing seem not to be on the same page with one another.
