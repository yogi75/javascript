### How many ways API can communicate? (API Protocols)

### 1. REST:
The Representational State Transfer (REST or RESTful) protocol is probably the best-known API protocol. 
The REST protocol defines routes with a URL … and that’s it. That simplicity is a big advantage compared to other protocols that require the developer to wrap routes with XML. 
The drawback is that REST APIs can only transmit information through the HTTP protocol, which means they are limited to sending text and not much else.

Once you have decided to use the REST protocol, it’s important to understand the architectural requirements for a REST API. Those requirements include:

#### Client-server architecture: 
The API interface remains on the client and is separated from the data kept on the server.
#### Statelessness: 
Each request made with the API is independent of all others and calls are made independently of one other.
#### Cacheable: 
A REST API response may be able to retrieve cached data, but you need to specify whether or not your responses can be cached.
#### Layered: 
The API works the same whether it interacts directly with the server or if there are other layers, like a load balancer or proxy service, between the client and the server.

### 2. SOAP APIs
The Simple Object Access Protocol (SOAP) is another major API protocol. A SOAP API can communicate over other major internet communication protocols, such as TCP and SMTP, in addition to HTTP. In that regard, it is more flexible than REST, but in most ways, SOAP is more restrictive. SOAP APIs can only work with XML data and have much more rigid requirements for requests. SOAP requests also generally require more bandwidth than REST, and building and maintaining SOAP code is more complex.

One major advantage of SOAP is that it requires metadata files describing requests, which makes exchanges more predictable. It also enables stateful requests, unlike REST, which is stateless. Having a more standardized protocol allows SOAP APIs to communicate more complex data reliably, and to deliver it over more channels than just HTTP.

In general, SOAP is a better fit for more sophisticated applications, where reliability is more important than speed or usability by a public audience. As a result, it’s widely used in financial services and in large enterprise applications like Salesforce.

### 3. RPC APIs
The Remote Procedure Call (RPC) protocol can return XML or JSON responses. It differs from SOAP and REST APIs in a few key ways. As the name suggests, this protocol calls a method rather than a data resource. While a RESTful API returns a document, the response from an RPC server is confirmation that the function was triggered, or an error indicating why it failed to run. In other words, a REST API works with resources, while an RPC API works with actions.

Another key difference is that a REST API shows the server and the query parameters in its routes, while an RPC’s URI identifies only the server. RPC APIs are rarely public APIs; triggering methods on remote servers is not something most companies want to allow for the general public. Calling an RPC server actually changes the state of the server, so it goes beyond the stateless/stateful distinction between REST and SOAP. As a result, RPC APIs must have a high level of security and trust between producers and consumers, which is why they are most often private APIs. Discoverability and predictability are thus less important for RPC APIs than they are for REST or SOAP APIs, while reliability and performance are more important.

One of the most common use cases for RPC APIs is distributed client-server applications.
In 2015, Google introduced a type of RPC called gRPC, which uses Protocol Buffers to serialize and parse data.
gRPC is built on HTTP/2, an update to HTTP that was introduced in 2015.

### 4. GraphQL APIs
While GraphQL isn’t really a separate protocol, it is a distinct query language, with best practices for its use. GraphQL uses HTTP, similar to a REST API, transmitting text data in the payload of each request, but its approach is different.

A REST API has multiple endpoints, each representing a different data schema. To get the information you need, you must map your requirements to the existing schema and call the appropriate endpoints. GraphQL APIs typically have a single endpoint, but effectively unlimited data schemas available at that endpoint. The API user must know what data fields are available, but they can write a query that combines those fields in whatever order they want. Queries are sent in the payload of an HTTP POST request, and data is returned in the shape of the schema specified by the query.
