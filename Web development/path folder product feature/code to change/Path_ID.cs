using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
using System.Data.SqlClient;

/// <summary>
/// Summary description for Path_ID
/// </summary>
/// 
public class MPCache_Table_PathID
{
    public static DateTime startTime = DateTime.Now;
    public static bool needReload()
    {
        UsingCacheExpirable theObject = UsingCacheExpirable.getObject(UsingCache_Key.Path_ID);

        if (theObject == null) return true;

        bool usingCache = theObject.UsingMemoryToSpeedUp;

        bool cacheExpired = false;

        if (usingCache)
        {
            DateTime time = DateTime.Now;
            TimeSpan difference = time.Subtract(startTime);

            if (difference.TotalSeconds > theObject.CacheExpiredInSeconds)
                cacheExpired = true;
        }

        if (!usingCache || (usingCache && cacheExpired))
        {
            startTime = DateTime.Now; // reset the cache start time
            return true;
        }
        else
            return false;
    }
}

public class Path_ID
{
    public static Hashtable pathDetailHashTable = new Hashtable(); 

    public static Hashtable GetPathDetail()
    {
        if (pathDetailHashTable.Count == 0 ||  MPCache_Table_PathID.needReload())
        {
            Hashtable hashtable = new Hashtable();

            String sqlStat = "select path_ID, class from path_ID";

            SqlDataReader dr = BowenIslandDatabase.GetReader(sqlStat);

            while (dr.Read())
            {
                string pathAlias = dr["path_ID"].ToString().Trim();
                string logicalPath = dr["class"].ToString().Trim();

                hashtable.Add(pathAlias, logicalPath);
            }

            dr.Close();
            dr.Dispose();

            pathDetailHashTable = hashtable; 
        }

        return pathDetailHashTable;
    }
		//
		// TODO: Add constructor logic here
		//
    private string path_alias;
    public string Path_alias
    {
        set
        {
            path_alias = value;
        }
        get
        {
            return path_alias;
        }
    }

    private string logicalPath;
    public string LogicalPath
    {
        set
        {
            logicalPath = value;
        }
        get
        {
            return logicalPath;
        }
    }	
}
