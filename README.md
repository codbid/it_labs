<- Test

## Test

> Test 123

Для запуска прилоложения нужно сначала собрать его:
<pre>
mvn clean package
</pre>
В случае если проект планируется запускать через Docker или база данных ещё не подключена, следует также добавить ключ -DskipTests, т.к. тест не пройдёт на этапе инициализации несуществующей базы данных.

Далее запустить jar файл:
<pre>
java -jar target/testcase-0.0.1-SNAPSHOT.jar
</pre>

Либо через Docker compose:
<pre>
docker-compose build
docker-compose up
</pre>

```http
GET /api/file/123 HTTP/1.1
Host: example.com
