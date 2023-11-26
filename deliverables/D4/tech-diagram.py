from diagrams import Diagram
from diagrams.aws.compute import EC2, ECS
from diagrams.aws.database import RDS, Aurora
from diagrams.aws.network import ELB
from diagrams.k8s.compute import ReplicaSet


with Diagram("Diagram", show=False):
    [ReplicaSet("Geojson Files") >> EC2("Data Processing"),
        ECS("Superset Backend"),
        ELB("Mapbpx API")] >> RDS("Mapbox Plugin") >> Aurora("Superset Frontend (React)")
