package connection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootTest
public class JDBCTests {
    private final String DRIVER = "org.mariadb.jdbc.Driver";
//    private final String URL = "jdbc:mariadb://172.17.0.2:4306/mafia_game?useUnicode=true&serverTimezone=Asia/Seoul";
    private final String URL = "jdbc:mariadb://localhost:4306/mafia_game?useUnicode=true&serverTimezone=Asia/Seoul";
    private final String USER = "mafia_gm";
    private final String PASSWORD = "1234";
private static final Logger logger = LoggerFactory.getLogger(JDBCTests.class);

    public void testConnection() throws ClassNotFoundException{
        Class.forName(DRIVER);
        try(Connection con = DriverManager.getConnection(URL, USER, PASSWORD)) {
            logger.info("connection :"+ con.toString());
        }catch (Exception e){
            e.printStackTrace();
            logger.info("testConnection" + e.getMessage());
        }
    }
}
