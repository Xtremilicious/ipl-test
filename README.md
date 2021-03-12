**Atlan Front-End Task**

**Problem Statement:** **Search the IPL**
Create a discovery page for IPL where users can search & use facet filters to find different entities – players, teams, owners & venus. Users should be able to filter based on any attributes related to the entity. Make it as easy, intuitive and as less steps as possible for the user to reach a particular entity.

*Note: You DON’T need to implement the search and filter logic for the data. Just have two types of views, 1) with no filters applied, and 2) with some filters applied. The aim of the task is to test you on the frontend and UI/UX aspects of the task. Implementation of search & filter logic will not be taken into account. The thought process matters more than the implementation for search & filter logic.

Hosted on Vercel.
**Solution Demo:** [IPL Explorer (ipl-test.vercel.app)](https://ipl-test.vercel.app/)
**Solution Demo with Filters:** [IPL Explorer Filtered(ipl-test.vercel.app)](https://ipl-test.vercel.app/filtered)
Page Load Time: 1530ms (99 page speed index via Lighthouse and BrowserStack)

**Optimizing Page Load Time:** Since the dataset had about 566 rows, displaying al of them at once slowed down the page load time significantly (page index score of about 45). Restricting the amount of rows/cards showing at once (the user is shown about 24 cards/rows at once, after which they can click the load more button to see more cards) increased the page load time resulting to 99 page index score.

**More optimizations that can be done:** React-Window can be used to decrease the amount of DOM nodes being created at once (only rendering part of a large data set just enough to fill the viewport). Furthermore, an infinite scroll behaviour result in a better UX than the "load more" button.

![report](https://user-images.githubusercontent.com/47635607/110965209-fcc54400-8379-11eb-9aa1-52b3c7b2cb46.png)
