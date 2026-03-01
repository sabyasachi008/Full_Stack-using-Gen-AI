load_dotenv()


loader =PyPdfLoader("")
documents= loader.load()

# split into small chunks -> speed of search 

text_splitter =RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=200
)

docs=text_splitter.split_documents(documents)

# open ai -> embedding -> "python"

embeddings=OPENAIEmbeddings()

vectorstore=FAISS.from_documents(docs,embeddings)

# retriver 
retriever-vectorstore.as_retriever()

llm=ChatOpenAI(model_name="gpt-3.5-turbo")

qa_chain=RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever
)

while True:
    query=input("Ask any question")
    response=qa_chain.run(query)
    print(response)